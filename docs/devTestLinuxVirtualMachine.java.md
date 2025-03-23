# `devTestLinuxVirtualMachine` Submodule <a name="`devTestLinuxVirtualMachine` Submodule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestLinuxVirtualMachine <a name="DevTestLinuxVirtualMachine" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine azurerm_dev_test_linux_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachine;

DevTestLinuxVirtualMachine.Builder.create(Construct scope, java.lang.String id)
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
    .galleryImageReference(DevTestLinuxVirtualMachineGalleryImageReference)
    .labName(java.lang.String)
    .labSubnetName(java.lang.String)
    .labVirtualNetworkId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
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
//  .inboundNatRule(java.util.List<DevTestLinuxVirtualMachineInboundNatRule>)
//  .notes(java.lang.String)
//  .password(java.lang.String)
//  .sshKey(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevTestLinuxVirtualMachineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.galleryImageReference">galleryImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a></code> | gallery_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labName">labName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_name DevTestLinuxVirtualMachine#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labSubnetName">labSubnetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_subnet_name DevTestLinuxVirtualMachine#lab_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labVirtualNetworkId">labVirtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_virtual_network_id DevTestLinuxVirtualMachine#lab_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#location DevTestLinuxVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#name DevTestLinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#resource_group_name DevTestLinuxVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#size DevTestLinuxVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#storage_type DevTestLinuxVirtualMachine#storage_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#username DevTestLinuxVirtualMachine#username}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.allowClaim">allowClaim</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#allow_claim DevTestLinuxVirtualMachine#allow_claim}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.disallowPublicIpAddress">disallowPublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#disallow_public_ip_address DevTestLinuxVirtualMachine#disallow_public_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#id DevTestLinuxVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.inboundNatRule">inboundNatRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>></code> | inbound_nat_rule block. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#notes DevTestLinuxVirtualMachine#notes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#password DevTestLinuxVirtualMachine#password}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.sshKey">sshKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#ssh_key DevTestLinuxVirtualMachine#ssh_key}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#tags DevTestLinuxVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `galleryImageReference`<sup>Required</sup> <a name="galleryImageReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.galleryImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a>

gallery_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#gallery_image_reference DevTestLinuxVirtualMachine#gallery_image_reference}

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_name DevTestLinuxVirtualMachine#lab_name}.

---

##### `labSubnetName`<sup>Required</sup> <a name="labSubnetName" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labSubnetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_subnet_name DevTestLinuxVirtualMachine#lab_subnet_name}.

---

##### `labVirtualNetworkId`<sup>Required</sup> <a name="labVirtualNetworkId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labVirtualNetworkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_virtual_network_id DevTestLinuxVirtualMachine#lab_virtual_network_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#location DevTestLinuxVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#name DevTestLinuxVirtualMachine#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#resource_group_name DevTestLinuxVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.size"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#size DevTestLinuxVirtualMachine#size}.

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#storage_type DevTestLinuxVirtualMachine#storage_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#username DevTestLinuxVirtualMachine#username}.

---

##### `allowClaim`<sup>Optional</sup> <a name="allowClaim" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.allowClaim"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#allow_claim DevTestLinuxVirtualMachine#allow_claim}.

---

##### `disallowPublicIpAddress`<sup>Optional</sup> <a name="disallowPublicIpAddress" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.disallowPublicIpAddress"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#disallow_public_ip_address DevTestLinuxVirtualMachine#disallow_public_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#id DevTestLinuxVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inboundNatRule`<sup>Optional</sup> <a name="inboundNatRule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.inboundNatRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>>

inbound_nat_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#inbound_nat_rule DevTestLinuxVirtualMachine#inbound_nat_rule}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#notes DevTestLinuxVirtualMachine#notes}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#password DevTestLinuxVirtualMachine#password}.

---

##### `sshKey`<sup>Optional</sup> <a name="sshKey" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.sshKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#ssh_key DevTestLinuxVirtualMachine#ssh_key}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#tags DevTestLinuxVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#timeouts DevTestLinuxVirtualMachine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putGalleryImageReference">putGalleryImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putInboundNatRule">putInboundNatRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetAllowClaim">resetAllowClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetDisallowPublicIpAddress">resetDisallowPublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetInboundNatRule">resetInboundNatRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetSshKey">resetSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGalleryImageReference` <a name="putGalleryImageReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putGalleryImageReference"></a>

```java
public void putGalleryImageReference(DevTestLinuxVirtualMachineGalleryImageReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putGalleryImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a>

---

##### `putInboundNatRule` <a name="putInboundNatRule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putInboundNatRule"></a>

```java
public void putInboundNatRule(IResolvable OR java.util.List<DevTestLinuxVirtualMachineInboundNatRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putInboundNatRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putTimeouts"></a>

```java
public void putTimeouts(DevTestLinuxVirtualMachineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a>

---

##### `resetAllowClaim` <a name="resetAllowClaim" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetAllowClaim"></a>

```java
public void resetAllowClaim()
```

##### `resetDisallowPublicIpAddress` <a name="resetDisallowPublicIpAddress" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetDisallowPublicIpAddress"></a>

```java
public void resetDisallowPublicIpAddress()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetId"></a>

```java
public void resetId()
```

##### `resetInboundNatRule` <a name="resetInboundNatRule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetInboundNatRule"></a>

```java
public void resetInboundNatRule()
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetSshKey` <a name="resetSshKey" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetSshKey"></a>

```java
public void resetSshKey()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DevTestLinuxVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachine;

DevTestLinuxVirtualMachine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachine;

DevTestLinuxVirtualMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachine;

DevTestLinuxVirtualMachine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachine;

DevTestLinuxVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevTestLinuxVirtualMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DevTestLinuxVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevTestLinuxVirtualMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevTestLinuxVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DevTestLinuxVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.galleryImageReference">galleryImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference">DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.inboundNatRule">inboundNatRule</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList">DevTestLinuxVirtualMachineInboundNatRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference">DevTestLinuxVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.uniqueIdentifier">uniqueIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.allowClaimInput">allowClaimInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.disallowPublicIpAddressInput">disallowPublicIpAddressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.galleryImageReferenceInput">galleryImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.inboundNatRuleInput">inboundNatRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labNameInput">labNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labSubnetNameInput">labSubnetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labVirtualNetworkIdInput">labVirtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sizeInput">sizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sshKeyInput">sshKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.allowClaim">allowClaim</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.disallowPublicIpAddress">disallowPublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labName">labName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labSubnetName">labSubnetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labVirtualNetworkId">labVirtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sshKey">sshKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `galleryImageReference`<sup>Required</sup> <a name="galleryImageReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.galleryImageReference"></a>

```java
public DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference getGalleryImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference">DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference</a>

---

##### `inboundNatRule`<sup>Required</sup> <a name="inboundNatRule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.inboundNatRule"></a>

```java
public DevTestLinuxVirtualMachineInboundNatRuleList getInboundNatRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList">DevTestLinuxVirtualMachineInboundNatRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.timeouts"></a>

```java
public DevTestLinuxVirtualMachineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference">DevTestLinuxVirtualMachineTimeoutsOutputReference</a>

---

##### `uniqueIdentifier`<sup>Required</sup> <a name="uniqueIdentifier" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.uniqueIdentifier"></a>

```java
public java.lang.String getUniqueIdentifier();
```

- *Type:* java.lang.String

---

##### `allowClaimInput`<sup>Optional</sup> <a name="allowClaimInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.allowClaimInput"></a>

```java
public java.lang.Object getAllowClaimInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disallowPublicIpAddressInput`<sup>Optional</sup> <a name="disallowPublicIpAddressInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.disallowPublicIpAddressInput"></a>

```java
public java.lang.Object getDisallowPublicIpAddressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `galleryImageReferenceInput`<sup>Optional</sup> <a name="galleryImageReferenceInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.galleryImageReferenceInput"></a>

```java
public DevTestLinuxVirtualMachineGalleryImageReference getGalleryImageReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inboundNatRuleInput`<sup>Optional</sup> <a name="inboundNatRuleInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.inboundNatRuleInput"></a>

```java
public java.lang.Object getInboundNatRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>>

---

##### `labNameInput`<sup>Optional</sup> <a name="labNameInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labNameInput"></a>

```java
public java.lang.String getLabNameInput();
```

- *Type:* java.lang.String

---

##### `labSubnetNameInput`<sup>Optional</sup> <a name="labSubnetNameInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labSubnetNameInput"></a>

```java
public java.lang.String getLabSubnetNameInput();
```

- *Type:* java.lang.String

---

##### `labVirtualNetworkIdInput`<sup>Optional</sup> <a name="labVirtualNetworkIdInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labVirtualNetworkIdInput"></a>

```java
public java.lang.String getLabVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sizeInput"></a>

```java
public java.lang.String getSizeInput();
```

- *Type:* java.lang.String

---

##### `sshKeyInput`<sup>Optional</sup> <a name="sshKeyInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sshKeyInput"></a>

```java
public java.lang.String getSshKeyInput();
```

- *Type:* java.lang.String

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `allowClaim`<sup>Required</sup> <a name="allowClaim" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.allowClaim"></a>

```java
public java.lang.Object getAllowClaim();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disallowPublicIpAddress`<sup>Required</sup> <a name="disallowPublicIpAddress" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.disallowPublicIpAddress"></a>

```java
public java.lang.Object getDisallowPublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labName"></a>

```java
public java.lang.String getLabName();
```

- *Type:* java.lang.String

---

##### `labSubnetName`<sup>Required</sup> <a name="labSubnetName" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labSubnetName"></a>

```java
public java.lang.String getLabSubnetName();
```

- *Type:* java.lang.String

---

##### `labVirtualNetworkId`<sup>Required</sup> <a name="labVirtualNetworkId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labVirtualNetworkId"></a>

```java
public java.lang.String getLabVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sshKey"></a>

```java
public java.lang.String getSshKey();
```

- *Type:* java.lang.String

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestLinuxVirtualMachineConfig <a name="DevTestLinuxVirtualMachineConfig" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachineConfig;

DevTestLinuxVirtualMachineConfig.builder()
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
    .galleryImageReference(DevTestLinuxVirtualMachineGalleryImageReference)
    .labName(java.lang.String)
    .labSubnetName(java.lang.String)
    .labVirtualNetworkId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
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
//  .inboundNatRule(java.util.List<DevTestLinuxVirtualMachineInboundNatRule>)
//  .notes(java.lang.String)
//  .password(java.lang.String)
//  .sshKey(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevTestLinuxVirtualMachineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.galleryImageReference">galleryImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a></code> | gallery_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labName">labName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_name DevTestLinuxVirtualMachine#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labSubnetName">labSubnetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_subnet_name DevTestLinuxVirtualMachine#lab_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labVirtualNetworkId">labVirtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_virtual_network_id DevTestLinuxVirtualMachine#lab_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#location DevTestLinuxVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#name DevTestLinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#resource_group_name DevTestLinuxVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.size">size</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#size DevTestLinuxVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#storage_type DevTestLinuxVirtualMachine#storage_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#username DevTestLinuxVirtualMachine#username}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.allowClaim">allowClaim</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#allow_claim DevTestLinuxVirtualMachine#allow_claim}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.disallowPublicIpAddress">disallowPublicIpAddress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#disallow_public_ip_address DevTestLinuxVirtualMachine#disallow_public_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#id DevTestLinuxVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.inboundNatRule">inboundNatRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>></code> | inbound_nat_rule block. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#notes DevTestLinuxVirtualMachine#notes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#password DevTestLinuxVirtualMachine#password}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.sshKey">sshKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#ssh_key DevTestLinuxVirtualMachine#ssh_key}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#tags DevTestLinuxVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `galleryImageReference`<sup>Required</sup> <a name="galleryImageReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.galleryImageReference"></a>

```java
public DevTestLinuxVirtualMachineGalleryImageReference getGalleryImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a>

gallery_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#gallery_image_reference DevTestLinuxVirtualMachine#gallery_image_reference}

---

##### `labName`<sup>Required</sup> <a name="labName" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labName"></a>

```java
public java.lang.String getLabName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_name DevTestLinuxVirtualMachine#lab_name}.

---

##### `labSubnetName`<sup>Required</sup> <a name="labSubnetName" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labSubnetName"></a>

```java
public java.lang.String getLabSubnetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_subnet_name DevTestLinuxVirtualMachine#lab_subnet_name}.

---

##### `labVirtualNetworkId`<sup>Required</sup> <a name="labVirtualNetworkId" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labVirtualNetworkId"></a>

```java
public java.lang.String getLabVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#lab_virtual_network_id DevTestLinuxVirtualMachine#lab_virtual_network_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#location DevTestLinuxVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#name DevTestLinuxVirtualMachine#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#resource_group_name DevTestLinuxVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#size DevTestLinuxVirtualMachine#size}.

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#storage_type DevTestLinuxVirtualMachine#storage_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#username DevTestLinuxVirtualMachine#username}.

---

##### `allowClaim`<sup>Optional</sup> <a name="allowClaim" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.allowClaim"></a>

```java
public java.lang.Object getAllowClaim();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#allow_claim DevTestLinuxVirtualMachine#allow_claim}.

---

##### `disallowPublicIpAddress`<sup>Optional</sup> <a name="disallowPublicIpAddress" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.disallowPublicIpAddress"></a>

```java
public java.lang.Object getDisallowPublicIpAddress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#disallow_public_ip_address DevTestLinuxVirtualMachine#disallow_public_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#id DevTestLinuxVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inboundNatRule`<sup>Optional</sup> <a name="inboundNatRule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.inboundNatRule"></a>

```java
public java.lang.Object getInboundNatRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>>

inbound_nat_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#inbound_nat_rule DevTestLinuxVirtualMachine#inbound_nat_rule}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#notes DevTestLinuxVirtualMachine#notes}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#password DevTestLinuxVirtualMachine#password}.

---

##### `sshKey`<sup>Optional</sup> <a name="sshKey" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.sshKey"></a>

```java
public java.lang.String getSshKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#ssh_key DevTestLinuxVirtualMachine#ssh_key}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#tags DevTestLinuxVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.timeouts"></a>

```java
public DevTestLinuxVirtualMachineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#timeouts DevTestLinuxVirtualMachine#timeouts}

---

### DevTestLinuxVirtualMachineGalleryImageReference <a name="DevTestLinuxVirtualMachineGalleryImageReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachineGalleryImageReference;

DevTestLinuxVirtualMachineGalleryImageReference.builder()
    .offer(java.lang.String)
    .publisher(java.lang.String)
    .sku(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#offer DevTestLinuxVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#publisher DevTestLinuxVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#sku DevTestLinuxVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#version DevTestLinuxVirtualMachine#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#offer DevTestLinuxVirtualMachine#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#publisher DevTestLinuxVirtualMachine#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#sku DevTestLinuxVirtualMachine#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#version DevTestLinuxVirtualMachine#version}.

---

### DevTestLinuxVirtualMachineInboundNatRule <a name="DevTestLinuxVirtualMachineInboundNatRule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachineInboundNatRule;

DevTestLinuxVirtualMachineInboundNatRule.builder()
    .backendPort(java.lang.Number)
    .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#backend_port DevTestLinuxVirtualMachine#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#protocol DevTestLinuxVirtualMachine#protocol}. |

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#backend_port DevTestLinuxVirtualMachine#backend_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#protocol DevTestLinuxVirtualMachine#protocol}.

---

### DevTestLinuxVirtualMachineTimeouts <a name="DevTestLinuxVirtualMachineTimeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachineTimeouts;

DevTestLinuxVirtualMachineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#create DevTestLinuxVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#delete DevTestLinuxVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#read DevTestLinuxVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#update DevTestLinuxVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#create DevTestLinuxVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#delete DevTestLinuxVirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#read DevTestLinuxVirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/dev_test_linux_virtual_machine#update DevTestLinuxVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference <a name="DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference;

new DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.internalValue"></a>

```java
public DevTestLinuxVirtualMachineGalleryImageReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a>

---


### DevTestLinuxVirtualMachineInboundNatRuleList <a name="DevTestLinuxVirtualMachineInboundNatRuleList" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachineInboundNatRuleList;

new DevTestLinuxVirtualMachineInboundNatRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.get"></a>

```java
public DevTestLinuxVirtualMachineInboundNatRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>>

---


### DevTestLinuxVirtualMachineInboundNatRuleOutputReference <a name="DevTestLinuxVirtualMachineInboundNatRuleOutputReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference;

new DevTestLinuxVirtualMachineInboundNatRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.frontendPort">frontendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.backendPortInput">backendPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frontendPort`<sup>Required</sup> <a name="frontendPort" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.frontendPort"></a>

```java
public java.lang.Number getFrontendPort();
```

- *Type:* java.lang.Number

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.backendPortInput"></a>

```java
public java.lang.Number getBackendPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>

---


### DevTestLinuxVirtualMachineTimeoutsOutputReference <a name="DevTestLinuxVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dev_test_linux_virtual_machine.DevTestLinuxVirtualMachineTimeoutsOutputReference;

new DevTestLinuxVirtualMachineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a>

---



