# `azurerm_shared_image`

Refer to the Terraform Registory for docs: [`azurerm_shared_image`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image).

# `sharedImage` Submodule <a name="`sharedImage` Submodule" id="@cdktf/provider-azurerm.sharedImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImage <a name="SharedImage" id="@cdktf/provider-azurerm.sharedImage.SharedImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image azurerm_shared_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image

sharedImage.SharedImage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_name: str,
  identifier: SharedImageIdentifier,
  location: str,
  name: str,
  os_type: str,
  resource_group_name: str,
  accelerated_network_support_enabled: typing.Union[bool, IResolvable] = None,
  architecture: str = None,
  confidential_vm_enabled: typing.Union[bool, IResolvable] = None,
  confidential_vm_supported: typing.Union[bool, IResolvable] = None,
  description: str = None,
  disk_types_not_allowed: typing.List[str] = None,
  end_of_life_date: str = None,
  eula: str = None,
  hyper_v_generation: str = None,
  id: str = None,
  max_recommended_memory_in_gb: typing.Union[int, float] = None,
  max_recommended_vcpu_count: typing.Union[int, float] = None,
  min_recommended_memory_in_gb: typing.Union[int, float] = None,
  min_recommended_vcpu_count: typing.Union[int, float] = None,
  privacy_statement_uri: str = None,
  purchase_plan: SharedImagePurchasePlan = None,
  release_note_uri: str = None,
  specialized: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: SharedImageTimeouts = None,
  trusted_launch_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.galleryName">gallery_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#location SharedImage#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#name SharedImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#os_type SharedImage#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.acceleratedNetworkSupportEnabled">accelerated_network_support_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#architecture SharedImage#architecture}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.confidentialVmEnabled">confidential_vm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.confidentialVmSupported">confidential_vm_supported</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#description SharedImage#description}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.diskTypesNotAllowed">disk_types_not_allowed</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.endOfLifeDate">end_of_life_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.eula">eula</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#eula SharedImage#eula}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.hyperVGeneration">hyper_v_generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#id SharedImage#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.maxRecommendedMemoryInGb">max_recommended_memory_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.maxRecommendedVcpuCount">max_recommended_vcpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.minRecommendedMemoryInGb">min_recommended_memory_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.minRecommendedVcpuCount">min_recommended_vcpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.privacyStatementUri">privacy_statement_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.purchasePlan">purchase_plan</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | purchase_plan block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.releaseNoteUri">release_note_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.specialized">specialized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#specialized SharedImage#specialized}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#tags SharedImage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.trustedLaunchEnabled">trusted_launch_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.galleryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.identifier"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#identifier SharedImage#identifier}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#location SharedImage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#name SharedImage#name}.

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.osType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#os_type SharedImage#os_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}.

---

##### `accelerated_network_support_enabled`<sup>Optional</sup> <a name="accelerated_network_support_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.acceleratedNetworkSupportEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.architecture"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#architecture SharedImage#architecture}.

---

##### `confidential_vm_enabled`<sup>Optional</sup> <a name="confidential_vm_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.confidentialVmEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}.

---

##### `confidential_vm_supported`<sup>Optional</sup> <a name="confidential_vm_supported" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.confidentialVmSupported"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#description SharedImage#description}.

---

##### `disk_types_not_allowed`<sup>Optional</sup> <a name="disk_types_not_allowed" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.diskTypesNotAllowed"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}.

---

##### `end_of_life_date`<sup>Optional</sup> <a name="end_of_life_date" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.endOfLifeDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}.

---

##### `eula`<sup>Optional</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.eula"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#eula SharedImage#eula}.

---

##### `hyper_v_generation`<sup>Optional</sup> <a name="hyper_v_generation" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.hyperVGeneration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#id SharedImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_recommended_memory_in_gb`<sup>Optional</sup> <a name="max_recommended_memory_in_gb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.maxRecommendedMemoryInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}.

---

##### `max_recommended_vcpu_count`<sup>Optional</sup> <a name="max_recommended_vcpu_count" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.maxRecommendedVcpuCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}.

---

##### `min_recommended_memory_in_gb`<sup>Optional</sup> <a name="min_recommended_memory_in_gb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.minRecommendedMemoryInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}.

---

##### `min_recommended_vcpu_count`<sup>Optional</sup> <a name="min_recommended_vcpu_count" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.minRecommendedVcpuCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}.

---

##### `privacy_statement_uri`<sup>Optional</sup> <a name="privacy_statement_uri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.privacyStatementUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}.

---

##### `purchase_plan`<sup>Optional</sup> <a name="purchase_plan" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.purchasePlan"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

purchase_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#purchase_plan SharedImage#purchase_plan}

---

##### `release_note_uri`<sup>Optional</sup> <a name="release_note_uri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.releaseNoteUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}.

---

##### `specialized`<sup>Optional</sup> <a name="specialized" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.specialized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#specialized SharedImage#specialized}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#tags SharedImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#timeouts SharedImage#timeouts}

---

##### `trusted_launch_enabled`<sup>Optional</sup> <a name="trusted_launch_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.trustedLaunchEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.putIdentifier">put_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.putPurchasePlan">put_purchase_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetAcceleratedNetworkSupportEnabled">reset_accelerated_network_support_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetArchitecture">reset_architecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmEnabled">reset_confidential_vm_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmSupported">reset_confidential_vm_supported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetDiskTypesNotAllowed">reset_disk_types_not_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetEndOfLifeDate">reset_end_of_life_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetEula">reset_eula</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetHyperVGeneration">reset_hyper_v_generation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedMemoryInGb">reset_max_recommended_memory_in_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedVcpuCount">reset_max_recommended_vcpu_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedMemoryInGb">reset_min_recommended_memory_in_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedVcpuCount">reset_min_recommended_vcpu_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetPrivacyStatementUri">reset_privacy_statement_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetPurchasePlan">reset_purchase_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetReleaseNoteUri">reset_release_note_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetSpecialized">reset_specialized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchEnabled">reset_trusted_launch_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImage.SharedImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sharedImage.SharedImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sharedImage.SharedImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_identifier` <a name="put_identifier" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putIdentifier"></a>

```python
def put_identifier(
  offer: str,
  publisher: str,
  sku: str
) -> None
```

###### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putIdentifier.parameter.offer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#offer SharedImage#offer}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putIdentifier.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#publisher SharedImage#publisher}.

---

###### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putIdentifier.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#sku SharedImage#sku}.

---

##### `put_purchase_plan` <a name="put_purchase_plan" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putPurchasePlan"></a>

```python
def put_purchase_plan(
  name: str,
  product: str = None,
  publisher: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putPurchasePlan.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#name SharedImage#name}.

---

###### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putPurchasePlan.parameter.product"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#product SharedImage#product}.

---

###### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putPurchasePlan.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#publisher SharedImage#publisher}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#create SharedImage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#delete SharedImage#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#read SharedImage#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#update SharedImage#update}.

---

##### `reset_accelerated_network_support_enabled` <a name="reset_accelerated_network_support_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetAcceleratedNetworkSupportEnabled"></a>

```python
def reset_accelerated_network_support_enabled() -> None
```

##### `reset_architecture` <a name="reset_architecture" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetArchitecture"></a>

```python
def reset_architecture() -> None
```

##### `reset_confidential_vm_enabled` <a name="reset_confidential_vm_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmEnabled"></a>

```python
def reset_confidential_vm_enabled() -> None
```

##### `reset_confidential_vm_supported` <a name="reset_confidential_vm_supported" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmSupported"></a>

```python
def reset_confidential_vm_supported() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disk_types_not_allowed` <a name="reset_disk_types_not_allowed" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetDiskTypesNotAllowed"></a>

```python
def reset_disk_types_not_allowed() -> None
```

##### `reset_end_of_life_date` <a name="reset_end_of_life_date" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetEndOfLifeDate"></a>

```python
def reset_end_of_life_date() -> None
```

##### `reset_eula` <a name="reset_eula" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetEula"></a>

```python
def reset_eula() -> None
```

##### `reset_hyper_v_generation` <a name="reset_hyper_v_generation" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetHyperVGeneration"></a>

```python
def reset_hyper_v_generation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_recommended_memory_in_gb` <a name="reset_max_recommended_memory_in_gb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedMemoryInGb"></a>

```python
def reset_max_recommended_memory_in_gb() -> None
```

##### `reset_max_recommended_vcpu_count` <a name="reset_max_recommended_vcpu_count" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedVcpuCount"></a>

```python
def reset_max_recommended_vcpu_count() -> None
```

##### `reset_min_recommended_memory_in_gb` <a name="reset_min_recommended_memory_in_gb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedMemoryInGb"></a>

```python
def reset_min_recommended_memory_in_gb() -> None
```

##### `reset_min_recommended_vcpu_count` <a name="reset_min_recommended_vcpu_count" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedVcpuCount"></a>

```python
def reset_min_recommended_vcpu_count() -> None
```

##### `reset_privacy_statement_uri` <a name="reset_privacy_statement_uri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetPrivacyStatementUri"></a>

```python
def reset_privacy_statement_uri() -> None
```

##### `reset_purchase_plan` <a name="reset_purchase_plan" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetPurchasePlan"></a>

```python
def reset_purchase_plan() -> None
```

##### `reset_release_note_uri` <a name="reset_release_note_uri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetReleaseNoteUri"></a>

```python
def reset_release_note_uri() -> None
```

##### `reset_specialized` <a name="reset_specialized" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetSpecialized"></a>

```python
def reset_specialized() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trusted_launch_enabled` <a name="reset_trusted_launch_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchEnabled"></a>

```python
def reset_trusted_launch_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image

sharedImage.SharedImage.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image

sharedImage.SharedImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image

sharedImage.SharedImage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference">SharedImageIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlan">purchase_plan</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference">SharedImagePurchasePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference">SharedImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabledInput">accelerated_network_support_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabledInput">confidential_vm_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupportedInput">confidential_vm_supported_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowedInput">disk_types_not_allowed_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDateInput">end_of_life_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.eulaInput">eula_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryNameInput">gallery_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGenerationInput">hyper_v_generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifierInput">identifier_input</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGbInput">max_recommended_memory_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCountInput">max_recommended_vcpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGbInput">min_recommended_memory_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCountInput">min_recommended_vcpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUriInput">privacy_statement_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlanInput">purchase_plan_input</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUriInput">release_note_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.specializedInput">specialized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabledInput">trusted_launch_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabled">accelerated_network_support_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabled">confidential_vm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupported">confidential_vm_supported</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowed">disk_types_not_allowed</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDate">end_of_life_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.eula">eula</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryName">gallery_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGeneration">hyper_v_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGb">max_recommended_memory_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCount">max_recommended_vcpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGb">min_recommended_memory_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCount">min_recommended_vcpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUri">privacy_statement_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUri">release_note_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.specialized">specialized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabled">trusted_launch_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifier"></a>

```python
identifier: SharedImageIdentifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference">SharedImageIdentifierOutputReference</a>

---

##### `purchase_plan`<sup>Required</sup> <a name="purchase_plan" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlan"></a>

```python
purchase_plan: SharedImagePurchasePlanOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference">SharedImagePurchasePlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeouts"></a>

```python
timeouts: SharedImageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference">SharedImageTimeoutsOutputReference</a>

---

##### `accelerated_network_support_enabled_input`<sup>Optional</sup> <a name="accelerated_network_support_enabled_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabledInput"></a>

```python
accelerated_network_support_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `confidential_vm_enabled_input`<sup>Optional</sup> <a name="confidential_vm_enabled_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabledInput"></a>

```python
confidential_vm_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_vm_supported_input`<sup>Optional</sup> <a name="confidential_vm_supported_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupportedInput"></a>

```python
confidential_vm_supported_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_types_not_allowed_input`<sup>Optional</sup> <a name="disk_types_not_allowed_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowedInput"></a>

```python
disk_types_not_allowed_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `end_of_life_date_input`<sup>Optional</sup> <a name="end_of_life_date_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDateInput"></a>

```python
end_of_life_date_input: str
```

- *Type:* str

---

##### `eula_input`<sup>Optional</sup> <a name="eula_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.eulaInput"></a>

```python
eula_input: str
```

- *Type:* str

---

##### `gallery_name_input`<sup>Optional</sup> <a name="gallery_name_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryNameInput"></a>

```python
gallery_name_input: str
```

- *Type:* str

---

##### `hyper_v_generation_input`<sup>Optional</sup> <a name="hyper_v_generation_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGenerationInput"></a>

```python
hyper_v_generation_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifierInput"></a>

```python
identifier_input: SharedImageIdentifier
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `max_recommended_memory_in_gb_input`<sup>Optional</sup> <a name="max_recommended_memory_in_gb_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGbInput"></a>

```python
max_recommended_memory_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_recommended_vcpu_count_input`<sup>Optional</sup> <a name="max_recommended_vcpu_count_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCountInput"></a>

```python
max_recommended_vcpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_recommended_memory_in_gb_input`<sup>Optional</sup> <a name="min_recommended_memory_in_gb_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGbInput"></a>

```python
min_recommended_memory_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_recommended_vcpu_count_input`<sup>Optional</sup> <a name="min_recommended_vcpu_count_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCountInput"></a>

```python
min_recommended_vcpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `privacy_statement_uri_input`<sup>Optional</sup> <a name="privacy_statement_uri_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUriInput"></a>

```python
privacy_statement_uri_input: str
```

- *Type:* str

---

##### `purchase_plan_input`<sup>Optional</sup> <a name="purchase_plan_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlanInput"></a>

```python
purchase_plan_input: SharedImagePurchasePlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

---

##### `release_note_uri_input`<sup>Optional</sup> <a name="release_note_uri_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUriInput"></a>

```python
release_note_uri_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `specialized_input`<sup>Optional</sup> <a name="specialized_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.specializedInput"></a>

```python
specialized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SharedImageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>]

---

##### `trusted_launch_enabled_input`<sup>Optional</sup> <a name="trusted_launch_enabled_input" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabledInput"></a>

```python
trusted_launch_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `accelerated_network_support_enabled`<sup>Required</sup> <a name="accelerated_network_support_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabled"></a>

```python
accelerated_network_support_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `confidential_vm_enabled`<sup>Required</sup> <a name="confidential_vm_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabled"></a>

```python
confidential_vm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `confidential_vm_supported`<sup>Required</sup> <a name="confidential_vm_supported" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupported"></a>

```python
confidential_vm_supported: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disk_types_not_allowed`<sup>Required</sup> <a name="disk_types_not_allowed" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowed"></a>

```python
disk_types_not_allowed: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `end_of_life_date`<sup>Required</sup> <a name="end_of_life_date" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDate"></a>

```python
end_of_life_date: str
```

- *Type:* str

---

##### `eula`<sup>Required</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.eula"></a>

```python
eula: str
```

- *Type:* str

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryName"></a>

```python
gallery_name: str
```

- *Type:* str

---

##### `hyper_v_generation`<sup>Required</sup> <a name="hyper_v_generation" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGeneration"></a>

```python
hyper_v_generation: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `max_recommended_memory_in_gb`<sup>Required</sup> <a name="max_recommended_memory_in_gb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGb"></a>

```python
max_recommended_memory_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_recommended_vcpu_count`<sup>Required</sup> <a name="max_recommended_vcpu_count" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCount"></a>

```python
max_recommended_vcpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_recommended_memory_in_gb`<sup>Required</sup> <a name="min_recommended_memory_in_gb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGb"></a>

```python
min_recommended_memory_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_recommended_vcpu_count`<sup>Required</sup> <a name="min_recommended_vcpu_count" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCount"></a>

```python
min_recommended_vcpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `privacy_statement_uri`<sup>Required</sup> <a name="privacy_statement_uri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUri"></a>

```python
privacy_statement_uri: str
```

- *Type:* str

---

##### `release_note_uri`<sup>Required</sup> <a name="release_note_uri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUri"></a>

```python
release_note_uri: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `specialized`<sup>Required</sup> <a name="specialized" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.specialized"></a>

```python
specialized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `trusted_launch_enabled`<sup>Required</sup> <a name="trusted_launch_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabled"></a>

```python
trusted_launch_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageConfig <a name="SharedImageConfig" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image

sharedImage.SharedImageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_name: str,
  identifier: SharedImageIdentifier,
  location: str,
  name: str,
  os_type: str,
  resource_group_name: str,
  accelerated_network_support_enabled: typing.Union[bool, IResolvable] = None,
  architecture: str = None,
  confidential_vm_enabled: typing.Union[bool, IResolvable] = None,
  confidential_vm_supported: typing.Union[bool, IResolvable] = None,
  description: str = None,
  disk_types_not_allowed: typing.List[str] = None,
  end_of_life_date: str = None,
  eula: str = None,
  hyper_v_generation: str = None,
  id: str = None,
  max_recommended_memory_in_gb: typing.Union[int, float] = None,
  max_recommended_vcpu_count: typing.Union[int, float] = None,
  min_recommended_memory_in_gb: typing.Union[int, float] = None,
  min_recommended_vcpu_count: typing.Union[int, float] = None,
  privacy_statement_uri: str = None,
  purchase_plan: SharedImagePurchasePlan = None,
  release_note_uri: str = None,
  specialized: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: SharedImageTimeouts = None,
  trusted_launch_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.galleryName">gallery_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#location SharedImage#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#name SharedImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#os_type SharedImage#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.acceleratedNetworkSupportEnabled">accelerated_network_support_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#architecture SharedImage#architecture}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmEnabled">confidential_vm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmSupported">confidential_vm_supported</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#description SharedImage#description}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.diskTypesNotAllowed">disk_types_not_allowed</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.endOfLifeDate">end_of_life_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.eula">eula</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#eula SharedImage#eula}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.hyperVGeneration">hyper_v_generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#id SharedImage#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedMemoryInGb">max_recommended_memory_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedVcpuCount">max_recommended_vcpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedMemoryInGb">min_recommended_memory_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedVcpuCount">min_recommended_vcpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.privacyStatementUri">privacy_statement_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.purchasePlan">purchase_plan</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | purchase_plan block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.releaseNoteUri">release_note_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.specialized">specialized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#specialized SharedImage#specialized}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#tags SharedImage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchEnabled">trusted_launch_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_name`<sup>Required</sup> <a name="gallery_name" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.galleryName"></a>

```python
gallery_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.identifier"></a>

```python
identifier: SharedImageIdentifier
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#identifier SharedImage#identifier}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#location SharedImage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#name SharedImage#name}.

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.osType"></a>

```python
os_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#os_type SharedImage#os_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}.

---

##### `accelerated_network_support_enabled`<sup>Optional</sup> <a name="accelerated_network_support_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.acceleratedNetworkSupportEnabled"></a>

```python
accelerated_network_support_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#architecture SharedImage#architecture}.

---

##### `confidential_vm_enabled`<sup>Optional</sup> <a name="confidential_vm_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmEnabled"></a>

```python
confidential_vm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}.

---

##### `confidential_vm_supported`<sup>Optional</sup> <a name="confidential_vm_supported" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmSupported"></a>

```python
confidential_vm_supported: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#description SharedImage#description}.

---

##### `disk_types_not_allowed`<sup>Optional</sup> <a name="disk_types_not_allowed" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.diskTypesNotAllowed"></a>

```python
disk_types_not_allowed: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}.

---

##### `end_of_life_date`<sup>Optional</sup> <a name="end_of_life_date" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.endOfLifeDate"></a>

```python
end_of_life_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}.

---

##### `eula`<sup>Optional</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.eula"></a>

```python
eula: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#eula SharedImage#eula}.

---

##### `hyper_v_generation`<sup>Optional</sup> <a name="hyper_v_generation" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.hyperVGeneration"></a>

```python
hyper_v_generation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#id SharedImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_recommended_memory_in_gb`<sup>Optional</sup> <a name="max_recommended_memory_in_gb" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedMemoryInGb"></a>

```python
max_recommended_memory_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}.

---

##### `max_recommended_vcpu_count`<sup>Optional</sup> <a name="max_recommended_vcpu_count" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedVcpuCount"></a>

```python
max_recommended_vcpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}.

---

##### `min_recommended_memory_in_gb`<sup>Optional</sup> <a name="min_recommended_memory_in_gb" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedMemoryInGb"></a>

```python
min_recommended_memory_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}.

---

##### `min_recommended_vcpu_count`<sup>Optional</sup> <a name="min_recommended_vcpu_count" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedVcpuCount"></a>

```python
min_recommended_vcpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}.

---

##### `privacy_statement_uri`<sup>Optional</sup> <a name="privacy_statement_uri" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.privacyStatementUri"></a>

```python
privacy_statement_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}.

---

##### `purchase_plan`<sup>Optional</sup> <a name="purchase_plan" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.purchasePlan"></a>

```python
purchase_plan: SharedImagePurchasePlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

purchase_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#purchase_plan SharedImage#purchase_plan}

---

##### `release_note_uri`<sup>Optional</sup> <a name="release_note_uri" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.releaseNoteUri"></a>

```python
release_note_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}.

---

##### `specialized`<sup>Optional</sup> <a name="specialized" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.specialized"></a>

```python
specialized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#specialized SharedImage#specialized}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#tags SharedImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.timeouts"></a>

```python
timeouts: SharedImageTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#timeouts SharedImage#timeouts}

---

##### `trusted_launch_enabled`<sup>Optional</sup> <a name="trusted_launch_enabled" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchEnabled"></a>

```python
trusted_launch_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}.

---

### SharedImageIdentifier <a name="SharedImageIdentifier" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image

sharedImage.SharedImageIdentifier(
  offer: str,
  publisher: str,
  sku: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#offer SharedImage#offer}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#publisher SharedImage#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#sku SharedImage#sku}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#offer SharedImage#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#publisher SharedImage#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#sku SharedImage#sku}.

---

### SharedImagePurchasePlan <a name="SharedImagePurchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image

sharedImage.SharedImagePurchasePlan(
  name: str,
  product: str = None,
  publisher: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#name SharedImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#product SharedImage#product}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#publisher SharedImage#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#name SharedImage#name}.

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.product"></a>

```python
product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#product SharedImage#product}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#publisher SharedImage#publisher}.

---

### SharedImageTimeouts <a name="SharedImageTimeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image

sharedImage.SharedImageTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#create SharedImage#create}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#delete SharedImage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#read SharedImage#read}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#update SharedImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#create SharedImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#delete SharedImage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#read SharedImage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/shared_image#update SharedImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageIdentifierOutputReference <a name="SharedImageIdentifierOutputReference" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image

sharedImage.SharedImageIdentifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.internalValue"></a>

```python
internal_value: SharedImageIdentifier
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

---


### SharedImagePurchasePlanOutputReference <a name="SharedImagePurchasePlanOutputReference" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image

sharedImage.SharedImagePurchasePlanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetProduct">reset_product</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetPublisher">reset_publisher</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_product` <a name="reset_product" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetProduct"></a>

```python
def reset_product() -> None
```

##### `reset_publisher` <a name="reset_publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetPublisher"></a>

```python
def reset_publisher() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.internalValue"></a>

```python
internal_value: SharedImagePurchasePlan
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

---


### SharedImageTimeoutsOutputReference <a name="SharedImageTimeoutsOutputReference" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import shared_image

sharedImage.SharedImageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SharedImageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>]

---



