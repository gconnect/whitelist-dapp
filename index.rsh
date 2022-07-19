'reach 0.1';

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });

  const whitlist = Array(Address, 1);

// Creator/deployer 
// - accept addresses in a set/map
// - view submitted addresses
// - create token (to give to whitelisted address)
// - assert that the address should not be more than 5

  const A = Participant('Alice', {
     // Specify Alice's interact interface here
    collectAddress: Fun([Address], Null),
    getAddress: Fun([], whitlist),
    gift: Fun([Token], UInt )
  });

// - submit address to the creator
// - view response(is either address was accepted or not)
// - getToken()  function .if address is accepted receive token from the deployer

  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    address: Address,
    outcome: Fun([], Bool),
    getToken: Token
  });
  init();
  // The first one to publish deploys the contract
  A.publish();
  const m = new Map(whitlist);
  commit();

  A.only(() => {
    const collectAdd = declassify(interact.collectAddress(this))
    const a = declassify(interact.getAddress())
  })
  A.publish(collectAdd,a)
  m[A] = a
  
  commit()

  // The second one to publish always attaches
  B.publish();
  commit();
  
  B.only(() => {
    const user = declassify(interact.address)
  })
  const whitlisted = new Set();
  whitlisted.insert(B);

  B.publish(user);
  commit();

  
  // write your program here
  exit();
});
