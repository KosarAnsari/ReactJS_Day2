function Exercise() {
  function callFun() {
    alert('function called');
  }

  return (
    <>
      <h1>To-Do</h1>
      <img
        src="https://images.search.yahoo.com/images/view;_ylt=AwrO8SZqh3Zo7lwF4EaJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzY5YzBjMzgyNTczMzkyMmNkZjA4NjU2MDUyZGFiNzEyBGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimage%26type%3DE210US714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=1600&h=1000&imgurl=thewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F01%2Fnature-images..jpg&rurl=https%3A%2F%2Fwww.thewowstyle.com%2Fbeautiful-nature-images-free-to-download%2F&size=528KB&p=image&oid=69c0c3825733922cdf08656052dab712&fr2=piv-web&fr=mcafee&tt=Beautiful+Nature+Images+Free+To+Download&b=0&ni=21&no=2&ts=&tab=organic&sigr=84l5SFb3wtAS&sigb=3y_23_dRIKJV&sigi=HY4ETDZon1B7&sigt=eELmvKt9Rulo&.crumb=Hisiar8.8nT&fr=mcafee&fr2=piv-web&type=E210US714G0"
        alt="this is image"
      />

      <ul>
        <li>Invent new traffic lights.</li>
        <li>Rehearse a movie Scene.</li>
        <li>Improve the spectrum technology.</li>
      </ul>
      <button onClick={callFun}> call Function!</button>
    </>
  );
}

export default Exercise;
