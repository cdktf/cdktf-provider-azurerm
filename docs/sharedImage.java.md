# `azurerm_shared_image`

Refer to the Terraform Registory for docs: [`azurerm_shared_image`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image).

# `sharedImage` Submodule <a name="`sharedImage` Submodule" id="@cdktf/provider-azurerm.sharedImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SharedImage <a name="SharedImage" id="@cdktf/provider-azurerm.sharedImage.SharedImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image azurerm_shared_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.shared_image.SharedImage;

SharedImage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .galleryName(java.lang.String)
    .identifier(SharedImageIdentifier)
    .location(java.lang.String)
    .name(java.lang.String)
    .osType(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .acceleratedNetworkSupportEnabled(java.lang.Boolean)
//  .acceleratedNetworkSupportEnabled(IResolvable)
//  .architecture(java.lang.String)
//  .confidentialVmEnabled(java.lang.Boolean)
//  .confidentialVmEnabled(IResolvable)
//  .confidentialVmSupported(java.lang.Boolean)
//  .confidentialVmSupported(IResolvable)
//  .description(java.lang.String)
//  .diskTypesNotAllowed(java.util.List<java.lang.String>)
//  .endOfLifeDate(java.lang.String)
//  .eula(java.lang.String)
//  .hyperVGeneration(java.lang.String)
//  .id(java.lang.String)
//  .maxRecommendedMemoryInGb(java.lang.Number)
//  .maxRecommendedVcpuCount(java.lang.Number)
//  .minRecommendedMemoryInGb(java.lang.Number)
//  .minRecommendedVcpuCount(java.lang.Number)
//  .privacyStatementUri(java.lang.String)
//  .purchasePlan(SharedImagePurchasePlan)
//  .releaseNoteUri(java.lang.String)
//  .specialized(java.lang.Boolean)
//  .specialized(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SharedImageTimeouts)
//  .trustedLaunchEnabled(java.lang.Boolean)
//  .trustedLaunchEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.galleryName">galleryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#location SharedImage#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#name SharedImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#os_type SharedImage#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.acceleratedNetworkSupportEnabled">acceleratedNetworkSupportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.architecture">architecture</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#architecture SharedImage#architecture}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.confidentialVmEnabled">confidentialVmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.confidentialVmSupported">confidentialVmSupported</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#description SharedImage#description}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.diskTypesNotAllowed">diskTypesNotAllowed</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.endOfLifeDate">endOfLifeDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.eula">eula</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#eula SharedImage#eula}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.hyperVGeneration">hyperVGeneration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#id SharedImage#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.maxRecommendedMemoryInGb">maxRecommendedMemoryInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.maxRecommendedVcpuCount">maxRecommendedVcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.minRecommendedMemoryInGb">minRecommendedMemoryInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.minRecommendedVcpuCount">minRecommendedVcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.privacyStatementUri">privacyStatementUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.purchasePlan">purchasePlan</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | purchase_plan block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.releaseNoteUri">releaseNoteUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.specialized">specialized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#specialized SharedImage#specialized}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#tags SharedImage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.trustedLaunchEnabled">trustedLaunchEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.galleryName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.identifier"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#identifier SharedImage#identifier}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#location SharedImage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#name SharedImage#name}.

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.osType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#os_type SharedImage#os_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}.

---

##### `acceleratedNetworkSupportEnabled`<sup>Optional</sup> <a name="acceleratedNetworkSupportEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.acceleratedNetworkSupportEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.architecture"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#architecture SharedImage#architecture}.

---

##### `confidentialVmEnabled`<sup>Optional</sup> <a name="confidentialVmEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.confidentialVmEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}.

---

##### `confidentialVmSupported`<sup>Optional</sup> <a name="confidentialVmSupported" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.confidentialVmSupported"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#description SharedImage#description}.

---

##### `diskTypesNotAllowed`<sup>Optional</sup> <a name="diskTypesNotAllowed" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.diskTypesNotAllowed"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}.

---

##### `endOfLifeDate`<sup>Optional</sup> <a name="endOfLifeDate" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.endOfLifeDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}.

---

##### `eula`<sup>Optional</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.eula"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#eula SharedImage#eula}.

---

##### `hyperVGeneration`<sup>Optional</sup> <a name="hyperVGeneration" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.hyperVGeneration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#id SharedImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxRecommendedMemoryInGb`<sup>Optional</sup> <a name="maxRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.maxRecommendedMemoryInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}.

---

##### `maxRecommendedVcpuCount`<sup>Optional</sup> <a name="maxRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.maxRecommendedVcpuCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}.

---

##### `minRecommendedMemoryInGb`<sup>Optional</sup> <a name="minRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.minRecommendedMemoryInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}.

---

##### `minRecommendedVcpuCount`<sup>Optional</sup> <a name="minRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.minRecommendedVcpuCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}.

---

##### `privacyStatementUri`<sup>Optional</sup> <a name="privacyStatementUri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.privacyStatementUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}.

---

##### `purchasePlan`<sup>Optional</sup> <a name="purchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.purchasePlan"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

purchase_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#purchase_plan SharedImage#purchase_plan}

---

##### `releaseNoteUri`<sup>Optional</sup> <a name="releaseNoteUri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.releaseNoteUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}.

---

##### `specialized`<sup>Optional</sup> <a name="specialized" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.specialized"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#specialized SharedImage#specialized}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#tags SharedImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#timeouts SharedImage#timeouts}

---

##### `trustedLaunchEnabled`<sup>Optional</sup> <a name="trustedLaunchEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.Initializer.parameter.trustedLaunchEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.putIdentifier">putIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.putPurchasePlan">putPurchasePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetAcceleratedNetworkSupportEnabled">resetAcceleratedNetworkSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetArchitecture">resetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmEnabled">resetConfidentialVmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmSupported">resetConfidentialVmSupported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetDiskTypesNotAllowed">resetDiskTypesNotAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetEndOfLifeDate">resetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetEula">resetEula</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetHyperVGeneration">resetHyperVGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedMemoryInGb">resetMaxRecommendedMemoryInGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedVcpuCount">resetMaxRecommendedVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedMemoryInGb">resetMinRecommendedMemoryInGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedVcpuCount">resetMinRecommendedVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetPrivacyStatementUri">resetPrivacyStatementUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetPurchasePlan">resetPurchasePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetReleaseNoteUri">resetReleaseNoteUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetSpecialized">resetSpecialized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchEnabled">resetTrustedLaunchEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImage.SharedImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImage.SharedImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sharedImage.SharedImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sharedImage.SharedImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIdentifier` <a name="putIdentifier" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putIdentifier"></a>

```java
public void putIdentifier(SharedImageIdentifier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

---

##### `putPurchasePlan` <a name="putPurchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putPurchasePlan"></a>

```java
public void putPurchasePlan(SharedImagePurchasePlan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putPurchasePlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts"></a>

```java
public void putTimeouts(SharedImageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sharedImage.SharedImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

---

##### `resetAcceleratedNetworkSupportEnabled` <a name="resetAcceleratedNetworkSupportEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetAcceleratedNetworkSupportEnabled"></a>

```java
public void resetAcceleratedNetworkSupportEnabled()
```

##### `resetArchitecture` <a name="resetArchitecture" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetArchitecture"></a>

```java
public void resetArchitecture()
```

##### `resetConfidentialVmEnabled` <a name="resetConfidentialVmEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmEnabled"></a>

```java
public void resetConfidentialVmEnabled()
```

##### `resetConfidentialVmSupported` <a name="resetConfidentialVmSupported" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetConfidentialVmSupported"></a>

```java
public void resetConfidentialVmSupported()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiskTypesNotAllowed` <a name="resetDiskTypesNotAllowed" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetDiskTypesNotAllowed"></a>

```java
public void resetDiskTypesNotAllowed()
```

##### `resetEndOfLifeDate` <a name="resetEndOfLifeDate" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetEndOfLifeDate"></a>

```java
public void resetEndOfLifeDate()
```

##### `resetEula` <a name="resetEula" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetEula"></a>

```java
public void resetEula()
```

##### `resetHyperVGeneration` <a name="resetHyperVGeneration" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetHyperVGeneration"></a>

```java
public void resetHyperVGeneration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetId"></a>

```java
public void resetId()
```

##### `resetMaxRecommendedMemoryInGb` <a name="resetMaxRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedMemoryInGb"></a>

```java
public void resetMaxRecommendedMemoryInGb()
```

##### `resetMaxRecommendedVcpuCount` <a name="resetMaxRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMaxRecommendedVcpuCount"></a>

```java
public void resetMaxRecommendedVcpuCount()
```

##### `resetMinRecommendedMemoryInGb` <a name="resetMinRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedMemoryInGb"></a>

```java
public void resetMinRecommendedMemoryInGb()
```

##### `resetMinRecommendedVcpuCount` <a name="resetMinRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetMinRecommendedVcpuCount"></a>

```java
public void resetMinRecommendedVcpuCount()
```

##### `resetPrivacyStatementUri` <a name="resetPrivacyStatementUri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetPrivacyStatementUri"></a>

```java
public void resetPrivacyStatementUri()
```

##### `resetPurchasePlan` <a name="resetPurchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetPurchasePlan"></a>

```java
public void resetPurchasePlan()
```

##### `resetReleaseNoteUri` <a name="resetReleaseNoteUri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetReleaseNoteUri"></a>

```java
public void resetReleaseNoteUri()
```

##### `resetSpecialized` <a name="resetSpecialized" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetSpecialized"></a>

```java
public void resetSpecialized()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrustedLaunchEnabled` <a name="resetTrustedLaunchEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.resetTrustedLaunchEnabled"></a>

```java
public void resetTrustedLaunchEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.shared_image.SharedImage;

SharedImage.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.shared_image.SharedImage;

SharedImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.shared_image.SharedImage;

SharedImage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sharedImage.SharedImage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference">SharedImageIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlan">purchasePlan</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference">SharedImagePurchasePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference">SharedImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabledInput">acceleratedNetworkSupportEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.architectureInput">architectureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabledInput">confidentialVmEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupportedInput">confidentialVmSupportedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowedInput">diskTypesNotAllowedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDateInput">endOfLifeDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.eulaInput">eulaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryNameInput">galleryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGenerationInput">hyperVGenerationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifierInput">identifierInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGbInput">maxRecommendedMemoryInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCountInput">maxRecommendedVcpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGbInput">minRecommendedMemoryInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCountInput">minRecommendedVcpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUriInput">privacyStatementUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlanInput">purchasePlanInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUriInput">releaseNoteUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.specializedInput">specializedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabledInput">trustedLaunchEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabled">acceleratedNetworkSupportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabled">confidentialVmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupported">confidentialVmSupported</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowed">diskTypesNotAllowed</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDate">endOfLifeDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.eula">eula</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryName">galleryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGeneration">hyperVGeneration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGb">maxRecommendedMemoryInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCount">maxRecommendedVcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGb">minRecommendedMemoryInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCount">minRecommendedVcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUri">privacyStatementUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUri">releaseNoteUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.specialized">specialized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabled">trustedLaunchEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifier"></a>

```java
public SharedImageIdentifierOutputReference getIdentifier();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference">SharedImageIdentifierOutputReference</a>

---

##### `purchasePlan`<sup>Required</sup> <a name="purchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlan"></a>

```java
public SharedImagePurchasePlanOutputReference getPurchasePlan();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference">SharedImagePurchasePlanOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeouts"></a>

```java
public SharedImageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference">SharedImageTimeoutsOutputReference</a>

---

##### `acceleratedNetworkSupportEnabledInput`<sup>Optional</sup> <a name="acceleratedNetworkSupportEnabledInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabledInput"></a>

```java
public java.lang.Object getAcceleratedNetworkSupportEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.architectureInput"></a>

```java
public java.lang.String getArchitectureInput();
```

- *Type:* java.lang.String

---

##### `confidentialVmEnabledInput`<sup>Optional</sup> <a name="confidentialVmEnabledInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabledInput"></a>

```java
public java.lang.Object getConfidentialVmEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialVmSupportedInput`<sup>Optional</sup> <a name="confidentialVmSupportedInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupportedInput"></a>

```java
public java.lang.Object getConfidentialVmSupportedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diskTypesNotAllowedInput`<sup>Optional</sup> <a name="diskTypesNotAllowedInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowedInput"></a>

```java
public java.util.List<java.lang.String> getDiskTypesNotAllowedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endOfLifeDateInput`<sup>Optional</sup> <a name="endOfLifeDateInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDateInput"></a>

```java
public java.lang.String getEndOfLifeDateInput();
```

- *Type:* java.lang.String

---

##### `eulaInput`<sup>Optional</sup> <a name="eulaInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.eulaInput"></a>

```java
public java.lang.String getEulaInput();
```

- *Type:* java.lang.String

---

##### `galleryNameInput`<sup>Optional</sup> <a name="galleryNameInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryNameInput"></a>

```java
public java.lang.String getGalleryNameInput();
```

- *Type:* java.lang.String

---

##### `hyperVGenerationInput`<sup>Optional</sup> <a name="hyperVGenerationInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGenerationInput"></a>

```java
public java.lang.String getHyperVGenerationInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.identifierInput"></a>

```java
public SharedImageIdentifier getIdentifierInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maxRecommendedMemoryInGbInput`<sup>Optional</sup> <a name="maxRecommendedMemoryInGbInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGbInput"></a>

```java
public java.lang.Number getMaxRecommendedMemoryInGbInput();
```

- *Type:* java.lang.Number

---

##### `maxRecommendedVcpuCountInput`<sup>Optional</sup> <a name="maxRecommendedVcpuCountInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCountInput"></a>

```java
public java.lang.Number getMaxRecommendedVcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `minRecommendedMemoryInGbInput`<sup>Optional</sup> <a name="minRecommendedMemoryInGbInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGbInput"></a>

```java
public java.lang.Number getMinRecommendedMemoryInGbInput();
```

- *Type:* java.lang.Number

---

##### `minRecommendedVcpuCountInput`<sup>Optional</sup> <a name="minRecommendedVcpuCountInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCountInput"></a>

```java
public java.lang.Number getMinRecommendedVcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `privacyStatementUriInput`<sup>Optional</sup> <a name="privacyStatementUriInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUriInput"></a>

```java
public java.lang.String getPrivacyStatementUriInput();
```

- *Type:* java.lang.String

---

##### `purchasePlanInput`<sup>Optional</sup> <a name="purchasePlanInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.purchasePlanInput"></a>

```java
public SharedImagePurchasePlan getPurchasePlanInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

---

##### `releaseNoteUriInput`<sup>Optional</sup> <a name="releaseNoteUriInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUriInput"></a>

```java
public java.lang.String getReleaseNoteUriInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `specializedInput`<sup>Optional</sup> <a name="specializedInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.specializedInput"></a>

```java
public java.lang.Object getSpecializedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

---

##### `trustedLaunchEnabledInput`<sup>Optional</sup> <a name="trustedLaunchEnabledInput" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabledInput"></a>

```java
public java.lang.Object getTrustedLaunchEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `acceleratedNetworkSupportEnabled`<sup>Required</sup> <a name="acceleratedNetworkSupportEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.acceleratedNetworkSupportEnabled"></a>

```java
public java.lang.Object getAcceleratedNetworkSupportEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `confidentialVmEnabled`<sup>Required</sup> <a name="confidentialVmEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmEnabled"></a>

```java
public java.lang.Object getConfidentialVmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `confidentialVmSupported`<sup>Required</sup> <a name="confidentialVmSupported" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.confidentialVmSupported"></a>

```java
public java.lang.Object getConfidentialVmSupported();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `diskTypesNotAllowed`<sup>Required</sup> <a name="diskTypesNotAllowed" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.diskTypesNotAllowed"></a>

```java
public java.util.List<java.lang.String> getDiskTypesNotAllowed();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endOfLifeDate`<sup>Required</sup> <a name="endOfLifeDate" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.endOfLifeDate"></a>

```java
public java.lang.String getEndOfLifeDate();
```

- *Type:* java.lang.String

---

##### `eula`<sup>Required</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.eula"></a>

```java
public java.lang.String getEula();
```

- *Type:* java.lang.String

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.galleryName"></a>

```java
public java.lang.String getGalleryName();
```

- *Type:* java.lang.String

---

##### `hyperVGeneration`<sup>Required</sup> <a name="hyperVGeneration" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.hyperVGeneration"></a>

```java
public java.lang.String getHyperVGeneration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxRecommendedMemoryInGb`<sup>Required</sup> <a name="maxRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedMemoryInGb"></a>

```java
public java.lang.Number getMaxRecommendedMemoryInGb();
```

- *Type:* java.lang.Number

---

##### `maxRecommendedVcpuCount`<sup>Required</sup> <a name="maxRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.maxRecommendedVcpuCount"></a>

```java
public java.lang.Number getMaxRecommendedVcpuCount();
```

- *Type:* java.lang.Number

---

##### `minRecommendedMemoryInGb`<sup>Required</sup> <a name="minRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedMemoryInGb"></a>

```java
public java.lang.Number getMinRecommendedMemoryInGb();
```

- *Type:* java.lang.Number

---

##### `minRecommendedVcpuCount`<sup>Required</sup> <a name="minRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.minRecommendedVcpuCount"></a>

```java
public java.lang.Number getMinRecommendedVcpuCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `privacyStatementUri`<sup>Required</sup> <a name="privacyStatementUri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.privacyStatementUri"></a>

```java
public java.lang.String getPrivacyStatementUri();
```

- *Type:* java.lang.String

---

##### `releaseNoteUri`<sup>Required</sup> <a name="releaseNoteUri" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.releaseNoteUri"></a>

```java
public java.lang.String getReleaseNoteUri();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `specialized`<sup>Required</sup> <a name="specialized" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.specialized"></a>

```java
public java.lang.Object getSpecialized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `trustedLaunchEnabled`<sup>Required</sup> <a name="trustedLaunchEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.trustedLaunchEnabled"></a>

```java
public java.lang.Object getTrustedLaunchEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sharedImage.SharedImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SharedImageConfig <a name="SharedImageConfig" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.shared_image.SharedImageConfig;

SharedImageConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .galleryName(java.lang.String)
    .identifier(SharedImageIdentifier)
    .location(java.lang.String)
    .name(java.lang.String)
    .osType(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .acceleratedNetworkSupportEnabled(java.lang.Boolean)
//  .acceleratedNetworkSupportEnabled(IResolvable)
//  .architecture(java.lang.String)
//  .confidentialVmEnabled(java.lang.Boolean)
//  .confidentialVmEnabled(IResolvable)
//  .confidentialVmSupported(java.lang.Boolean)
//  .confidentialVmSupported(IResolvable)
//  .description(java.lang.String)
//  .diskTypesNotAllowed(java.util.List<java.lang.String>)
//  .endOfLifeDate(java.lang.String)
//  .eula(java.lang.String)
//  .hyperVGeneration(java.lang.String)
//  .id(java.lang.String)
//  .maxRecommendedMemoryInGb(java.lang.Number)
//  .maxRecommendedVcpuCount(java.lang.Number)
//  .minRecommendedMemoryInGb(java.lang.Number)
//  .minRecommendedVcpuCount(java.lang.Number)
//  .privacyStatementUri(java.lang.String)
//  .purchasePlan(SharedImagePurchasePlan)
//  .releaseNoteUri(java.lang.String)
//  .specialized(java.lang.Boolean)
//  .specialized(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SharedImageTimeouts)
//  .trustedLaunchEnabled(java.lang.Boolean)
//  .trustedLaunchEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.galleryName">galleryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.identifier">identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#location SharedImage#location}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#name SharedImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#os_type SharedImage#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.acceleratedNetworkSupportEnabled">acceleratedNetworkSupportEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.architecture">architecture</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#architecture SharedImage#architecture}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmEnabled">confidentialVmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmSupported">confidentialVmSupported</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#description SharedImage#description}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.diskTypesNotAllowed">diskTypesNotAllowed</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.endOfLifeDate">endOfLifeDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.eula">eula</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#eula SharedImage#eula}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.hyperVGeneration">hyperVGeneration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#id SharedImage#id}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedMemoryInGb">maxRecommendedMemoryInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedVcpuCount">maxRecommendedVcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedMemoryInGb">minRecommendedMemoryInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedVcpuCount">minRecommendedVcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.privacyStatementUri">privacyStatementUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.purchasePlan">purchasePlan</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | purchase_plan block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.releaseNoteUri">releaseNoteUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.specialized">specialized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#specialized SharedImage#specialized}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#tags SharedImage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchEnabled">trustedLaunchEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `galleryName`<sup>Required</sup> <a name="galleryName" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.galleryName"></a>

```java
public java.lang.String getGalleryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#gallery_name SharedImage#gallery_name}.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.identifier"></a>

```java
public SharedImageIdentifier getIdentifier();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#identifier SharedImage#identifier}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#location SharedImage#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#name SharedImage#name}.

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#os_type SharedImage#os_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#resource_group_name SharedImage#resource_group_name}.

---

##### `acceleratedNetworkSupportEnabled`<sup>Optional</sup> <a name="acceleratedNetworkSupportEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.acceleratedNetworkSupportEnabled"></a>

```java
public java.lang.Object getAcceleratedNetworkSupportEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#accelerated_network_support_enabled SharedImage#accelerated_network_support_enabled}.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#architecture SharedImage#architecture}.

---

##### `confidentialVmEnabled`<sup>Optional</sup> <a name="confidentialVmEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmEnabled"></a>

```java
public java.lang.Object getConfidentialVmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#confidential_vm_enabled SharedImage#confidential_vm_enabled}.

---

##### `confidentialVmSupported`<sup>Optional</sup> <a name="confidentialVmSupported" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.confidentialVmSupported"></a>

```java
public java.lang.Object getConfidentialVmSupported();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#confidential_vm_supported SharedImage#confidential_vm_supported}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#description SharedImage#description}.

---

##### `diskTypesNotAllowed`<sup>Optional</sup> <a name="diskTypesNotAllowed" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.diskTypesNotAllowed"></a>

```java
public java.util.List<java.lang.String> getDiskTypesNotAllowed();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#disk_types_not_allowed SharedImage#disk_types_not_allowed}.

---

##### `endOfLifeDate`<sup>Optional</sup> <a name="endOfLifeDate" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.endOfLifeDate"></a>

```java
public java.lang.String getEndOfLifeDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#end_of_life_date SharedImage#end_of_life_date}.

---

##### `eula`<sup>Optional</sup> <a name="eula" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.eula"></a>

```java
public java.lang.String getEula();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#eula SharedImage#eula}.

---

##### `hyperVGeneration`<sup>Optional</sup> <a name="hyperVGeneration" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.hyperVGeneration"></a>

```java
public java.lang.String getHyperVGeneration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#hyper_v_generation SharedImage#hyper_v_generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#id SharedImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxRecommendedMemoryInGb`<sup>Optional</sup> <a name="maxRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedMemoryInGb"></a>

```java
public java.lang.Number getMaxRecommendedMemoryInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#max_recommended_memory_in_gb SharedImage#max_recommended_memory_in_gb}.

---

##### `maxRecommendedVcpuCount`<sup>Optional</sup> <a name="maxRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.maxRecommendedVcpuCount"></a>

```java
public java.lang.Number getMaxRecommendedVcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#max_recommended_vcpu_count SharedImage#max_recommended_vcpu_count}.

---

##### `minRecommendedMemoryInGb`<sup>Optional</sup> <a name="minRecommendedMemoryInGb" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedMemoryInGb"></a>

```java
public java.lang.Number getMinRecommendedMemoryInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#min_recommended_memory_in_gb SharedImage#min_recommended_memory_in_gb}.

---

##### `minRecommendedVcpuCount`<sup>Optional</sup> <a name="minRecommendedVcpuCount" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.minRecommendedVcpuCount"></a>

```java
public java.lang.Number getMinRecommendedVcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#min_recommended_vcpu_count SharedImage#min_recommended_vcpu_count}.

---

##### `privacyStatementUri`<sup>Optional</sup> <a name="privacyStatementUri" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.privacyStatementUri"></a>

```java
public java.lang.String getPrivacyStatementUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#privacy_statement_uri SharedImage#privacy_statement_uri}.

---

##### `purchasePlan`<sup>Optional</sup> <a name="purchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.purchasePlan"></a>

```java
public SharedImagePurchasePlan getPurchasePlan();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

purchase_plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#purchase_plan SharedImage#purchase_plan}

---

##### `releaseNoteUri`<sup>Optional</sup> <a name="releaseNoteUri" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.releaseNoteUri"></a>

```java
public java.lang.String getReleaseNoteUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#release_note_uri SharedImage#release_note_uri}.

---

##### `specialized`<sup>Optional</sup> <a name="specialized" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.specialized"></a>

```java
public java.lang.Object getSpecialized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#specialized SharedImage#specialized}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#tags SharedImage#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.timeouts"></a>

```java
public SharedImageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#timeouts SharedImage#timeouts}

---

##### `trustedLaunchEnabled`<sup>Optional</sup> <a name="trustedLaunchEnabled" id="@cdktf/provider-azurerm.sharedImage.SharedImageConfig.property.trustedLaunchEnabled"></a>

```java
public java.lang.Object getTrustedLaunchEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#trusted_launch_enabled SharedImage#trusted_launch_enabled}.

---

### SharedImageIdentifier <a name="SharedImageIdentifier" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.shared_image.SharedImageIdentifier;

SharedImageIdentifier.builder()
    .offer(java.lang.String)
    .publisher(java.lang.String)
    .sku(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#offer SharedImage#offer}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#publisher SharedImage#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#sku SharedImage#sku}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#offer SharedImage#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#publisher SharedImage#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#sku SharedImage#sku}.

---

### SharedImagePurchasePlan <a name="SharedImagePurchasePlan" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.shared_image.SharedImagePurchasePlan;

SharedImagePurchasePlan.builder()
    .name(java.lang.String)
//  .product(java.lang.String)
//  .publisher(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#name SharedImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.product">product</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#product SharedImage#product}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#publisher SharedImage#publisher}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#name SharedImage#name}.

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#product SharedImage#product}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#publisher SharedImage#publisher}.

---

### SharedImageTimeouts <a name="SharedImageTimeouts" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.shared_image.SharedImageTimeouts;

SharedImageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#create SharedImage#create}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#delete SharedImage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#read SharedImage#read}. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#update SharedImage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#create SharedImage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#delete SharedImage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#read SharedImage#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/shared_image#update SharedImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SharedImageIdentifierOutputReference <a name="SharedImageIdentifierOutputReference" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.shared_image.SharedImageIdentifierOutputReference;

new SharedImageIdentifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImage.SharedImageIdentifierOutputReference.property.internalValue"></a>

```java
public SharedImageIdentifier getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageIdentifier">SharedImageIdentifier</a>

---


### SharedImagePurchasePlanOutputReference <a name="SharedImagePurchasePlanOutputReference" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.shared_image.SharedImagePurchasePlanOutputReference;

new SharedImagePurchasePlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetPublisher">resetPublisher</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProduct` <a name="resetProduct" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetProduct"></a>

```java
public void resetProduct()
```

##### `resetPublisher` <a name="resetPublisher" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.resetPublisher"></a>

```java
public void resetPublisher()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.productInput">productInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.productInput"></a>

```java
public java.lang.String getProductInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlanOutputReference.property.internalValue"></a>

```java
public SharedImagePurchasePlan getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sharedImage.SharedImagePurchasePlan">SharedImagePurchasePlan</a>

---


### SharedImageTimeoutsOutputReference <a name="SharedImageTimeoutsOutputReference" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.shared_image.SharedImageTimeoutsOutputReference;

new SharedImageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sharedImage.SharedImageTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sharedImage.SharedImageTimeouts">SharedImageTimeouts</a>

---



