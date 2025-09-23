# `devTestLinuxVirtualMachine` Submodule <a name="`devTestLinuxVirtualMachine` Submodule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestLinuxVirtualMachine <a name="DevTestLinuxVirtualMachine" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine azurerm_dev_test_linux_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_image_reference: DevTestLinuxVirtualMachineGalleryImageReference,
  lab_name: str,
  lab_subnet_name: str,
  lab_virtual_network_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  size: str,
  storage_type: str,
  username: str,
  allow_claim: typing.Union[bool, IResolvable] = None,
  disallow_public_ip_address: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inbound_nat_rule: typing.Union[IResolvable, typing.List[DevTestLinuxVirtualMachineInboundNatRule]] = None,
  notes: str = None,
  password: str = None,
  ssh_key: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DevTestLinuxVirtualMachineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.galleryImageReference">gallery_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a></code> | gallery_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labName">lab_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_name DevTestLinuxVirtualMachine#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labSubnetName">lab_subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_subnet_name DevTestLinuxVirtualMachine#lab_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labVirtualNetworkId">lab_virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_virtual_network_id DevTestLinuxVirtualMachine#lab_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#location DevTestLinuxVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#name DevTestLinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#resource_group_name DevTestLinuxVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#size DevTestLinuxVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#storage_type DevTestLinuxVirtualMachine#storage_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#username DevTestLinuxVirtualMachine#username}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.allowClaim">allow_claim</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#allow_claim DevTestLinuxVirtualMachine#allow_claim}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.disallowPublicIpAddress">disallow_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#disallow_public_ip_address DevTestLinuxVirtualMachine#disallow_public_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#id DevTestLinuxVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.inboundNatRule">inbound_nat_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>]]</code> | inbound_nat_rule block. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#notes DevTestLinuxVirtualMachine#notes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#password DevTestLinuxVirtualMachine#password}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.sshKey">ssh_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#ssh_key DevTestLinuxVirtualMachine#ssh_key}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#tags DevTestLinuxVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_image_reference`<sup>Required</sup> <a name="gallery_image_reference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.galleryImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a>

gallery_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#gallery_image_reference DevTestLinuxVirtualMachine#gallery_image_reference}

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_name DevTestLinuxVirtualMachine#lab_name}.

---

##### `lab_subnet_name`<sup>Required</sup> <a name="lab_subnet_name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labSubnetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_subnet_name DevTestLinuxVirtualMachine#lab_subnet_name}.

---

##### `lab_virtual_network_id`<sup>Required</sup> <a name="lab_virtual_network_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.labVirtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_virtual_network_id DevTestLinuxVirtualMachine#lab_virtual_network_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#location DevTestLinuxVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#name DevTestLinuxVirtualMachine#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#resource_group_name DevTestLinuxVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.size"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#size DevTestLinuxVirtualMachine#size}.

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.storageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#storage_type DevTestLinuxVirtualMachine#storage_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#username DevTestLinuxVirtualMachine#username}.

---

##### `allow_claim`<sup>Optional</sup> <a name="allow_claim" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.allowClaim"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#allow_claim DevTestLinuxVirtualMachine#allow_claim}.

---

##### `disallow_public_ip_address`<sup>Optional</sup> <a name="disallow_public_ip_address" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.disallowPublicIpAddress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#disallow_public_ip_address DevTestLinuxVirtualMachine#disallow_public_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#id DevTestLinuxVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_nat_rule`<sup>Optional</sup> <a name="inbound_nat_rule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.inboundNatRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>]]

inbound_nat_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#inbound_nat_rule DevTestLinuxVirtualMachine#inbound_nat_rule}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.notes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#notes DevTestLinuxVirtualMachine#notes}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#password DevTestLinuxVirtualMachine#password}.

---

##### `ssh_key`<sup>Optional</sup> <a name="ssh_key" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.sshKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#ssh_key DevTestLinuxVirtualMachine#ssh_key}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#tags DevTestLinuxVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#timeouts DevTestLinuxVirtualMachine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putGalleryImageReference">put_gallery_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putInboundNatRule">put_inbound_nat_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetAllowClaim">reset_allow_claim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetDisallowPublicIpAddress">reset_disallow_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetInboundNatRule">reset_inbound_nat_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetSshKey">reset_ssh_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gallery_image_reference` <a name="put_gallery_image_reference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putGalleryImageReference"></a>

```python
def put_gallery_image_reference(
  offer: str,
  publisher: str,
  sku: str,
  version: str
) -> None
```

###### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putGalleryImageReference.parameter.offer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#offer DevTestLinuxVirtualMachine#offer}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putGalleryImageReference.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#publisher DevTestLinuxVirtualMachine#publisher}.

---

###### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putGalleryImageReference.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#sku DevTestLinuxVirtualMachine#sku}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putGalleryImageReference.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#version DevTestLinuxVirtualMachine#version}.

---

##### `put_inbound_nat_rule` <a name="put_inbound_nat_rule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putInboundNatRule"></a>

```python
def put_inbound_nat_rule(
  value: typing.Union[IResolvable, typing.List[DevTestLinuxVirtualMachineInboundNatRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putInboundNatRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#create DevTestLinuxVirtualMachine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#delete DevTestLinuxVirtualMachine#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#read DevTestLinuxVirtualMachine#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#update DevTestLinuxVirtualMachine#update}.

---

##### `reset_allow_claim` <a name="reset_allow_claim" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetAllowClaim"></a>

```python
def reset_allow_claim() -> None
```

##### `reset_disallow_public_ip_address` <a name="reset_disallow_public_ip_address" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetDisallowPublicIpAddress"></a>

```python
def reset_disallow_public_ip_address() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inbound_nat_rule` <a name="reset_inbound_nat_rule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetInboundNatRule"></a>

```python
def reset_inbound_nat_rule() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_ssh_key` <a name="reset_ssh_key" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetSshKey"></a>

```python
def reset_ssh_key() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DevTestLinuxVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DevTestLinuxVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevTestLinuxVirtualMachine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevTestLinuxVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevTestLinuxVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.galleryImageReference">gallery_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference">DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.inboundNatRule">inbound_nat_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList">DevTestLinuxVirtualMachineInboundNatRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference">DevTestLinuxVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.uniqueIdentifier">unique_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.allowClaimInput">allow_claim_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.disallowPublicIpAddressInput">disallow_public_ip_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.galleryImageReferenceInput">gallery_image_reference_input</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.inboundNatRuleInput">inbound_nat_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labNameInput">lab_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labSubnetNameInput">lab_subnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labVirtualNetworkIdInput">lab_virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sshKeyInput">ssh_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.allowClaim">allow_claim</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.disallowPublicIpAddress">disallow_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labName">lab_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labSubnetName">lab_subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labVirtualNetworkId">lab_virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sshKey">ssh_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `gallery_image_reference`<sup>Required</sup> <a name="gallery_image_reference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.galleryImageReference"></a>

```python
gallery_image_reference: DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference">DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference</a>

---

##### `inbound_nat_rule`<sup>Required</sup> <a name="inbound_nat_rule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.inboundNatRule"></a>

```python
inbound_nat_rule: DevTestLinuxVirtualMachineInboundNatRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList">DevTestLinuxVirtualMachineInboundNatRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.timeouts"></a>

```python
timeouts: DevTestLinuxVirtualMachineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference">DevTestLinuxVirtualMachineTimeoutsOutputReference</a>

---

##### `unique_identifier`<sup>Required</sup> <a name="unique_identifier" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.uniqueIdentifier"></a>

```python
unique_identifier: str
```

- *Type:* str

---

##### `allow_claim_input`<sup>Optional</sup> <a name="allow_claim_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.allowClaimInput"></a>

```python
allow_claim_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disallow_public_ip_address_input`<sup>Optional</sup> <a name="disallow_public_ip_address_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.disallowPublicIpAddressInput"></a>

```python
disallow_public_ip_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gallery_image_reference_input`<sup>Optional</sup> <a name="gallery_image_reference_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.galleryImageReferenceInput"></a>

```python
gallery_image_reference_input: DevTestLinuxVirtualMachineGalleryImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inbound_nat_rule_input`<sup>Optional</sup> <a name="inbound_nat_rule_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.inboundNatRuleInput"></a>

```python
inbound_nat_rule_input: typing.Union[IResolvable, typing.List[DevTestLinuxVirtualMachineInboundNatRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>]]

---

##### `lab_name_input`<sup>Optional</sup> <a name="lab_name_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labNameInput"></a>

```python
lab_name_input: str
```

- *Type:* str

---

##### `lab_subnet_name_input`<sup>Optional</sup> <a name="lab_subnet_name_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labSubnetNameInput"></a>

```python
lab_subnet_name_input: str
```

- *Type:* str

---

##### `lab_virtual_network_id_input`<sup>Optional</sup> <a name="lab_virtual_network_id_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labVirtualNetworkIdInput"></a>

```python
lab_virtual_network_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `ssh_key_input`<sup>Optional</sup> <a name="ssh_key_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sshKeyInput"></a>

```python
ssh_key_input: str
```

- *Type:* str

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DevTestLinuxVirtualMachineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `allow_claim`<sup>Required</sup> <a name="allow_claim" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.allowClaim"></a>

```python
allow_claim: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disallow_public_ip_address`<sup>Required</sup> <a name="disallow_public_ip_address" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.disallowPublicIpAddress"></a>

```python
disallow_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labName"></a>

```python
lab_name: str
```

- *Type:* str

---

##### `lab_subnet_name`<sup>Required</sup> <a name="lab_subnet_name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labSubnetName"></a>

```python
lab_subnet_name: str
```

- *Type:* str

---

##### `lab_virtual_network_id`<sup>Required</sup> <a name="lab_virtual_network_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.labVirtualNetworkId"></a>

```python
lab_virtual_network_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `ssh_key`<sup>Required</sup> <a name="ssh_key" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.sshKey"></a>

```python
ssh_key: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestLinuxVirtualMachineConfig <a name="DevTestLinuxVirtualMachineConfig" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_image_reference: DevTestLinuxVirtualMachineGalleryImageReference,
  lab_name: str,
  lab_subnet_name: str,
  lab_virtual_network_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  size: str,
  storage_type: str,
  username: str,
  allow_claim: typing.Union[bool, IResolvable] = None,
  disallow_public_ip_address: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inbound_nat_rule: typing.Union[IResolvable, typing.List[DevTestLinuxVirtualMachineInboundNatRule]] = None,
  notes: str = None,
  password: str = None,
  ssh_key: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DevTestLinuxVirtualMachineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.galleryImageReference">gallery_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a></code> | gallery_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labName">lab_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_name DevTestLinuxVirtualMachine#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labSubnetName">lab_subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_subnet_name DevTestLinuxVirtualMachine#lab_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labVirtualNetworkId">lab_virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_virtual_network_id DevTestLinuxVirtualMachine#lab_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#location DevTestLinuxVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#name DevTestLinuxVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#resource_group_name DevTestLinuxVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#size DevTestLinuxVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#storage_type DevTestLinuxVirtualMachine#storage_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#username DevTestLinuxVirtualMachine#username}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.allowClaim">allow_claim</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#allow_claim DevTestLinuxVirtualMachine#allow_claim}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.disallowPublicIpAddress">disallow_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#disallow_public_ip_address DevTestLinuxVirtualMachine#disallow_public_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#id DevTestLinuxVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.inboundNatRule">inbound_nat_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>]]</code> | inbound_nat_rule block. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#notes DevTestLinuxVirtualMachine#notes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#password DevTestLinuxVirtualMachine#password}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.sshKey">ssh_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#ssh_key DevTestLinuxVirtualMachine#ssh_key}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#tags DevTestLinuxVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_image_reference`<sup>Required</sup> <a name="gallery_image_reference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.galleryImageReference"></a>

```python
gallery_image_reference: DevTestLinuxVirtualMachineGalleryImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a>

gallery_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#gallery_image_reference DevTestLinuxVirtualMachine#gallery_image_reference}

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labName"></a>

```python
lab_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_name DevTestLinuxVirtualMachine#lab_name}.

---

##### `lab_subnet_name`<sup>Required</sup> <a name="lab_subnet_name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labSubnetName"></a>

```python
lab_subnet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_subnet_name DevTestLinuxVirtualMachine#lab_subnet_name}.

---

##### `lab_virtual_network_id`<sup>Required</sup> <a name="lab_virtual_network_id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.labVirtualNetworkId"></a>

```python
lab_virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#lab_virtual_network_id DevTestLinuxVirtualMachine#lab_virtual_network_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#location DevTestLinuxVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#name DevTestLinuxVirtualMachine#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#resource_group_name DevTestLinuxVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.size"></a>

```python
size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#size DevTestLinuxVirtualMachine#size}.

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#storage_type DevTestLinuxVirtualMachine#storage_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#username DevTestLinuxVirtualMachine#username}.

---

##### `allow_claim`<sup>Optional</sup> <a name="allow_claim" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.allowClaim"></a>

```python
allow_claim: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#allow_claim DevTestLinuxVirtualMachine#allow_claim}.

---

##### `disallow_public_ip_address`<sup>Optional</sup> <a name="disallow_public_ip_address" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.disallowPublicIpAddress"></a>

```python
disallow_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#disallow_public_ip_address DevTestLinuxVirtualMachine#disallow_public_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#id DevTestLinuxVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_nat_rule`<sup>Optional</sup> <a name="inbound_nat_rule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.inboundNatRule"></a>

```python
inbound_nat_rule: typing.Union[IResolvable, typing.List[DevTestLinuxVirtualMachineInboundNatRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>]]

inbound_nat_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#inbound_nat_rule DevTestLinuxVirtualMachine#inbound_nat_rule}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.notes"></a>

```python
notes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#notes DevTestLinuxVirtualMachine#notes}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#password DevTestLinuxVirtualMachine#password}.

---

##### `ssh_key`<sup>Optional</sup> <a name="ssh_key" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.sshKey"></a>

```python
ssh_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#ssh_key DevTestLinuxVirtualMachine#ssh_key}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#tags DevTestLinuxVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineConfig.property.timeouts"></a>

```python
timeouts: DevTestLinuxVirtualMachineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#timeouts DevTestLinuxVirtualMachine#timeouts}

---

### DevTestLinuxVirtualMachineGalleryImageReference <a name="DevTestLinuxVirtualMachineGalleryImageReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference(
  offer: str,
  publisher: str,
  sku: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#offer DevTestLinuxVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#publisher DevTestLinuxVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#sku DevTestLinuxVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#version DevTestLinuxVirtualMachine#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#offer DevTestLinuxVirtualMachine#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#publisher DevTestLinuxVirtualMachine#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#sku DevTestLinuxVirtualMachine#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#version DevTestLinuxVirtualMachine#version}.

---

### DevTestLinuxVirtualMachineInboundNatRule <a name="DevTestLinuxVirtualMachineInboundNatRule" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule(
  backend_port: typing.Union[int, float],
  protocol: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#backend_port DevTestLinuxVirtualMachine#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#protocol DevTestLinuxVirtualMachine#protocol}. |

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#backend_port DevTestLinuxVirtualMachine#backend_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#protocol DevTestLinuxVirtualMachine#protocol}.

---

### DevTestLinuxVirtualMachineTimeouts <a name="DevTestLinuxVirtualMachineTimeouts" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#create DevTestLinuxVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#delete DevTestLinuxVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#read DevTestLinuxVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#update DevTestLinuxVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#create DevTestLinuxVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#delete DevTestLinuxVirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#read DevTestLinuxVirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/dev_test_linux_virtual_machine#update DevTestLinuxVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference <a name="DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DevTestLinuxVirtualMachineGalleryImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineGalleryImageReference">DevTestLinuxVirtualMachineGalleryImageReference</a>

---


### DevTestLinuxVirtualMachineInboundNatRuleList <a name="DevTestLinuxVirtualMachineInboundNatRuleList" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevTestLinuxVirtualMachineInboundNatRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevTestLinuxVirtualMachineInboundNatRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>]]

---


### DevTestLinuxVirtualMachineInboundNatRuleOutputReference <a name="DevTestLinuxVirtualMachineInboundNatRuleOutputReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.frontendPort">frontend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.backendPortInput">backend_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frontend_port`<sup>Required</sup> <a name="frontend_port" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.frontendPort"></a>

```python
frontend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend_port_input`<sup>Optional</sup> <a name="backend_port_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.backendPortInput"></a>

```python
backend_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevTestLinuxVirtualMachineInboundNatRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineInboundNatRule">DevTestLinuxVirtualMachineInboundNatRule</a>]

---


### DevTestLinuxVirtualMachineTimeoutsOutputReference <a name="DevTestLinuxVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_linux_virtual_machine

devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevTestLinuxVirtualMachineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestLinuxVirtualMachine.DevTestLinuxVirtualMachineTimeouts">DevTestLinuxVirtualMachineTimeouts</a>]

---



