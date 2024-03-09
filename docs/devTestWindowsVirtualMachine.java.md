# `devTestWindowsVirtualMachine` Submodule <a name="`devTestWindowsVirtualMachine` Submodule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestWindowsVirtualMachine <a name="DevTestWindowsVirtualMachine" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine azurerm_dev_test_windows_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachine;

DevTestWindowsVirtualMachine.Builder.create(Construct scope, java.lang.String id)
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
    .galleryImageReference(DevTestWindowsVirtualMachineGalleryImageReference)
    .labName(java.lang.String)
    .labSubnetName(java.lang.String)
    .labVirtualNetworkId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .resourceGroupName(java.lang.String)
    .size(java.lang.String)
    .storageType(java.lang.String)
    .username(java.lang.String)
//  .allowClaim(java.lang.Boolean)
//  .allowClaim(IResolvable)
//  .disallowPublicIpAddress(java.lang.Boolean)
//  .disallowPublicIpAddress(IResolvable)
//  .id(java.lang.String)
//  .inboundNatRule(IResolvable)
//  .inboundNatRule(java.util.List<DevTestWindowsVirtualMachineInboundNatRule>)
//  .notes(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevTestWindowsVirtualMachineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.galleryImageReference">galleryImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a></code> | gallery_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labName">labName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_name DevTestWindowsVirtualMachine#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labSubnetName">labSubnetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labVirtualNetworkId">labVirtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#location DevTestWindowsVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#name DevTestWindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#password DevTestWindowsVirtualMachine#password}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#size DevTestWindowsVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#storage_type DevTestWindowsVirtualMachine#storage_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#username DevTestWindowsVirtualMachine#username}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.allowClaim">allowClaim</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#allow_claim DevTestWindowsVirtualMachine#allow_claim}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.disallowPublicIpAddress">disallowPublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#id DevTestWindowsVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.inboundNatRule">inboundNatRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>></code> | inbound_nat_rule block. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#notes DevTestWindowsVirtualMachine#notes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#tags DevTestWindowsVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `galleryImageReference`<sup>Required</sup> <a name="galleryImageReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.galleryImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

gallery_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#gallery_image_reference DevTestWindowsVirtualMachine#gallery_image_reference}

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_name DevTestWindowsVirtualMachine#lab_name}.

---

##### `labSubnetName`<sup>Required</sup> <a name="labSubnetName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labSubnetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}.

---

##### `labVirtualNetworkId`<sup>Required</sup> <a name="labVirtualNetworkId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labVirtualNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#location DevTestWindowsVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#name DevTestWindowsVirtualMachine#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#password DevTestWindowsVirtualMachine#password}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.size"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#size DevTestWindowsVirtualMachine#size}.

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#storage_type DevTestWindowsVirtualMachine#storage_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#username DevTestWindowsVirtualMachine#username}.

---

##### `allowClaim`<sup>Optional</sup> <a name="allowClaim" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.allowClaim"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#allow_claim DevTestWindowsVirtualMachine#allow_claim}.

---

##### `disallowPublicIpAddress`<sup>Optional</sup> <a name="disallowPublicIpAddress" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.disallowPublicIpAddress"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#id DevTestWindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inboundNatRule`<sup>Optional</sup> <a name="inboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.inboundNatRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>>

inbound_nat_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#inbound_nat_rule DevTestWindowsVirtualMachine#inbound_nat_rule}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#notes DevTestWindowsVirtualMachine#notes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#tags DevTestWindowsVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#timeouts DevTestWindowsVirtualMachine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference">putGalleryImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putInboundNatRule">putInboundNatRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetAllowClaim">resetAllowClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetDisallowPublicIpAddress">resetDisallowPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetInboundNatRule">resetInboundNatRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGalleryImageReference` <a name="putGalleryImageReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference"></a>

```java
public void putGalleryImageReference(DevTestWindowsVirtualMachineGalleryImageReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

---

##### `putInboundNatRule` <a name="putInboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putInboundNatRule"></a>

```java
public void putInboundNatRule(IResolvable OR java.util.List<DevTestWindowsVirtualMachineInboundNatRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putInboundNatRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts"></a>

```java
public void putTimeouts(DevTestWindowsVirtualMachineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>

---

##### `resetAllowClaim` <a name="resetAllowClaim" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetAllowClaim"></a>

```java
public void resetAllowClaim()
```

##### `resetDisallowPublicIpAddress` <a name="resetDisallowPublicIpAddress" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetDisallowPublicIpAddress"></a>

```java
public void resetDisallowPublicIpAddress()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetId"></a>

```java
public void resetId()
```

##### `resetInboundNatRule` <a name="resetInboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetInboundNatRule"></a>

```java
public void resetInboundNatRule()
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevTestWindowsVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachine;

DevTestWindowsVirtualMachine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachine;

DevTestWindowsVirtualMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachine;

DevTestWindowsVirtualMachine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachine;

DevTestWindowsVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevTestWindowsVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevTestWindowsVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevTestWindowsVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevTestWindowsVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevTestWindowsVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReference">galleryImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference">DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRule">inboundNatRule</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList">DevTestWindowsVirtualMachineInboundNatRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference">DevTestWindowsVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.uniqueIdentifier">uniqueIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaimInput">allowClaimInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddressInput">disallowPublicIpAddressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReferenceInput">galleryImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRuleInput">inboundNatRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labNameInput">labNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetNameInput">labSubnetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkIdInput">labVirtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaim">allowClaim</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddress">disallowPublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labName">labName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetName">labSubnetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkId">labVirtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `galleryImageReference`<sup>Required</sup> <a name="galleryImageReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReference"></a>

```java
public DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference getGalleryImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference">DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference</a>

---

##### `inboundNatRule`<sup>Required</sup> <a name="inboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRule"></a>

```java
public DevTestWindowsVirtualMachineInboundNatRuleList getInboundNatRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList">DevTestWindowsVirtualMachineInboundNatRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeouts"></a>

```java
public DevTestWindowsVirtualMachineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference">DevTestWindowsVirtualMachineTimeoutsOutputReference</a>

---

##### `uniqueIdentifier`<sup>Required</sup> <a name="uniqueIdentifier" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.uniqueIdentifier"></a>

```java
public java.lang.String getUniqueIdentifier();
```

- *Type:* java.lang.String

---

##### `allowClaimInput`<sup>Optional</sup> <a name="allowClaimInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaimInput"></a>

```java
public java.lang.Object getAllowClaimInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disallowPublicIpAddressInput`<sup>Optional</sup> <a name="disallowPublicIpAddressInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddressInput"></a>

```java
public java.lang.Object getDisallowPublicIpAddressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `galleryImageReferenceInput`<sup>Optional</sup> <a name="galleryImageReferenceInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReferenceInput"></a>

```java
public DevTestWindowsVirtualMachineGalleryImageReference getGalleryImageReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inboundNatRuleInput`<sup>Optional</sup> <a name="inboundNatRuleInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRuleInput"></a>

```java
public java.lang.Object getInboundNatRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>>

---

##### `labNameInput`<sup>Optional</sup> <a name="labNameInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labNameInput"></a>

```java
public java.lang.String getLabNameInput();
```

- *Type:* java.lang.String

---

##### `labSubnetNameInput`<sup>Optional</sup> <a name="labSubnetNameInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetNameInput"></a>

```java
public java.lang.String getLabSubnetNameInput();
```

- *Type:* java.lang.String

---

##### `labVirtualNetworkIdInput`<sup>Optional</sup> <a name="labVirtualNetworkIdInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkIdInput"></a>

```java
public java.lang.String getLabVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `allowClaim`<sup>Required</sup> <a name="allowClaim" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaim"></a>

```java
public java.lang.Object getAllowClaim();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disallowPublicIpAddress`<sup>Required</sup> <a name="disallowPublicIpAddress" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddress"></a>

```java
public java.lang.Object getDisallowPublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labName"></a>

```java
public java.lang.String getLabName();
```

- *Type:* java.lang.String

---

##### `labSubnetName`<sup>Required</sup> <a name="labSubnetName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetName"></a>

```java
public java.lang.String getLabSubnetName();
```

- *Type:* java.lang.String

---

##### `labVirtualNetworkId`<sup>Required</sup> <a name="labVirtualNetworkId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkId"></a>

```java
public java.lang.String getLabVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestWindowsVirtualMachineConfig <a name="DevTestWindowsVirtualMachineConfig" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachineConfig;

DevTestWindowsVirtualMachineConfig.builder()
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
    .galleryImageReference(DevTestWindowsVirtualMachineGalleryImageReference)
    .labName(java.lang.String)
    .labSubnetName(java.lang.String)
    .labVirtualNetworkId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .resourceGroupName(java.lang.String)
    .size(java.lang.String)
    .storageType(java.lang.String)
    .username(java.lang.String)
//  .allowClaim(java.lang.Boolean)
//  .allowClaim(IResolvable)
//  .disallowPublicIpAddress(java.lang.Boolean)
//  .disallowPublicIpAddress(IResolvable)
//  .id(java.lang.String)
//  .inboundNatRule(IResolvable)
//  .inboundNatRule(java.util.List<DevTestWindowsVirtualMachineInboundNatRule>)
//  .notes(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevTestWindowsVirtualMachineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.galleryImageReference">galleryImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a></code> | gallery_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labName">labName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_name DevTestWindowsVirtualMachine#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labSubnetName">labSubnetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labVirtualNetworkId">labVirtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#location DevTestWindowsVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#name DevTestWindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#password DevTestWindowsVirtualMachine#password}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#size DevTestWindowsVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#storage_type DevTestWindowsVirtualMachine#storage_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#username DevTestWindowsVirtualMachine#username}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.allowClaim">allowClaim</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#allow_claim DevTestWindowsVirtualMachine#allow_claim}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.disallowPublicIpAddress">disallowPublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#id DevTestWindowsVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.inboundNatRule">inboundNatRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>></code> | inbound_nat_rule block. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#notes DevTestWindowsVirtualMachine#notes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#tags DevTestWindowsVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `galleryImageReference`<sup>Required</sup> <a name="galleryImageReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.galleryImageReference"></a>

```java
public DevTestWindowsVirtualMachineGalleryImageReference getGalleryImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

gallery_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#gallery_image_reference DevTestWindowsVirtualMachine#gallery_image_reference}

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labName"></a>

```java
public java.lang.String getLabName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_name DevTestWindowsVirtualMachine#lab_name}.

---

##### `labSubnetName`<sup>Required</sup> <a name="labSubnetName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labSubnetName"></a>

```java
public java.lang.String getLabSubnetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}.

---

##### `labVirtualNetworkId`<sup>Required</sup> <a name="labVirtualNetworkId" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labVirtualNetworkId"></a>

```java
public java.lang.String getLabVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#location DevTestWindowsVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#name DevTestWindowsVirtualMachine#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#password DevTestWindowsVirtualMachine#password}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#size DevTestWindowsVirtualMachine#size}.

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#storage_type DevTestWindowsVirtualMachine#storage_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#username DevTestWindowsVirtualMachine#username}.

---

##### `allowClaim`<sup>Optional</sup> <a name="allowClaim" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.allowClaim"></a>

```java
public java.lang.Object getAllowClaim();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#allow_claim DevTestWindowsVirtualMachine#allow_claim}.

---

##### `disallowPublicIpAddress`<sup>Optional</sup> <a name="disallowPublicIpAddress" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.disallowPublicIpAddress"></a>

```java
public java.lang.Object getDisallowPublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#id DevTestWindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inboundNatRule`<sup>Optional</sup> <a name="inboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.inboundNatRule"></a>

```java
public java.lang.Object getInboundNatRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>>

inbound_nat_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#inbound_nat_rule DevTestWindowsVirtualMachine#inbound_nat_rule}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#notes DevTestWindowsVirtualMachine#notes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#tags DevTestWindowsVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.timeouts"></a>

```java
public DevTestWindowsVirtualMachineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#timeouts DevTestWindowsVirtualMachine#timeouts}

---

### DevTestWindowsVirtualMachineGalleryImageReference <a name="DevTestWindowsVirtualMachineGalleryImageReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachineGalleryImageReference;

DevTestWindowsVirtualMachineGalleryImageReference.builder()
    .offer(java.lang.String)
    .publisher(java.lang.String)
    .sku(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#offer DevTestWindowsVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#publisher DevTestWindowsVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#sku DevTestWindowsVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#version DevTestWindowsVirtualMachine#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#offer DevTestWindowsVirtualMachine#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#publisher DevTestWindowsVirtualMachine#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#sku DevTestWindowsVirtualMachine#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#version DevTestWindowsVirtualMachine#version}.

---

### DevTestWindowsVirtualMachineInboundNatRule <a name="DevTestWindowsVirtualMachineInboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachineInboundNatRule;

DevTestWindowsVirtualMachineInboundNatRule.builder()
    .backendPort(java.lang.Number)
    .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#backend_port DevTestWindowsVirtualMachine#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#protocol DevTestWindowsVirtualMachine#protocol}. |

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#backend_port DevTestWindowsVirtualMachine#backend_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#protocol DevTestWindowsVirtualMachine#protocol}.

---

### DevTestWindowsVirtualMachineTimeouts <a name="DevTestWindowsVirtualMachineTimeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachineTimeouts;

DevTestWindowsVirtualMachineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#create DevTestWindowsVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#delete DevTestWindowsVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#read DevTestWindowsVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#update DevTestWindowsVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#create DevTestWindowsVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#delete DevTestWindowsVirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#read DevTestWindowsVirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/dev_test_windows_virtual_machine#update DevTestWindowsVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference <a name="DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference;

new DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.internalValue"></a>

```java
public DevTestWindowsVirtualMachineGalleryImageReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

---


### DevTestWindowsVirtualMachineInboundNatRuleList <a name="DevTestWindowsVirtualMachineInboundNatRuleList" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachineInboundNatRuleList;

new DevTestWindowsVirtualMachineInboundNatRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.get"></a>

```java
public DevTestWindowsVirtualMachineInboundNatRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>>

---


### DevTestWindowsVirtualMachineInboundNatRuleOutputReference <a name="DevTestWindowsVirtualMachineInboundNatRuleOutputReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference;

new DevTestWindowsVirtualMachineInboundNatRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.frontendPort">frontendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frontendPort`<sup>Required</sup> <a name="frontendPort" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.frontendPort"></a>

```java
public java.lang.Number getFrontendPort();
```

- *Type:* java.lang.Number

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPortInput"></a>

```java
public java.lang.Number getBackendPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>

---


### DevTestWindowsVirtualMachineTimeoutsOutputReference <a name="DevTestWindowsVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_windows_virtual_machine.DevTestWindowsVirtualMachineTimeoutsOutputReference;

new DevTestWindowsVirtualMachineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>

---



