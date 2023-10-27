# `azurerm_dev_test_windows_virtual_machine`

Refer to the Terraform Registory for docs: [`azurerm_dev_test_windows_virtual_machine`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine).

# `devTestWindowsVirtualMachine` Submodule <a name="`devTestWindowsVirtualMachine` Submodule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestWindowsVirtualMachine <a name="DevTestWindowsVirtualMachine" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine azurerm_dev_test_windows_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_image_reference: DevTestWindowsVirtualMachineGalleryImageReference,
  lab_name: str,
  lab_subnet_name: str,
  lab_virtual_network_id: str,
  location: str,
  name: str,
  password: str,
  resource_group_name: str,
  size: str,
  storage_type: str,
  username: str,
  allow_claim: typing.Union[bool, IResolvable] = None,
  disallow_public_ip_address: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inbound_nat_rule: typing.Union[IResolvable, typing.List[DevTestWindowsVirtualMachineInboundNatRule]] = None,
  notes: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DevTestWindowsVirtualMachineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.galleryImageReference">gallery_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a></code> | gallery_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labName">lab_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_name DevTestWindowsVirtualMachine#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labSubnetName">lab_subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labVirtualNetworkId">lab_virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#location DevTestWindowsVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#name DevTestWindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#password DevTestWindowsVirtualMachine#password}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#size DevTestWindowsVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#storage_type DevTestWindowsVirtualMachine#storage_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#username DevTestWindowsVirtualMachine#username}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.allowClaim">allow_claim</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#allow_claim DevTestWindowsVirtualMachine#allow_claim}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.disallowPublicIpAddress">disallow_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#id DevTestWindowsVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.inboundNatRule">inbound_nat_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>]]</code> | inbound_nat_rule block. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#notes DevTestWindowsVirtualMachine#notes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#tags DevTestWindowsVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_image_reference`<sup>Required</sup> <a name="gallery_image_reference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.galleryImageReference"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

gallery_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#gallery_image_reference DevTestWindowsVirtualMachine#gallery_image_reference}

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_name DevTestWindowsVirtualMachine#lab_name}.

---

##### `lab_subnet_name`<sup>Required</sup> <a name="lab_subnet_name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labSubnetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}.

---

##### `lab_virtual_network_id`<sup>Required</sup> <a name="lab_virtual_network_id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.labVirtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#location DevTestWindowsVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#name DevTestWindowsVirtualMachine#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#password DevTestWindowsVirtualMachine#password}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.size"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#size DevTestWindowsVirtualMachine#size}.

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.storageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#storage_type DevTestWindowsVirtualMachine#storage_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#username DevTestWindowsVirtualMachine#username}.

---

##### `allow_claim`<sup>Optional</sup> <a name="allow_claim" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.allowClaim"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#allow_claim DevTestWindowsVirtualMachine#allow_claim}.

---

##### `disallow_public_ip_address`<sup>Optional</sup> <a name="disallow_public_ip_address" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.disallowPublicIpAddress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#id DevTestWindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_nat_rule`<sup>Optional</sup> <a name="inbound_nat_rule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.inboundNatRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>]]

inbound_nat_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#inbound_nat_rule DevTestWindowsVirtualMachine#inbound_nat_rule}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.notes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#notes DevTestWindowsVirtualMachine#notes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#tags DevTestWindowsVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#timeouts DevTestWindowsVirtualMachine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference">put_gallery_image_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putInboundNatRule">put_inbound_nat_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetAllowClaim">reset_allow_claim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetDisallowPublicIpAddress">reset_disallow_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetInboundNatRule">reset_inbound_nat_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_gallery_image_reference` <a name="put_gallery_image_reference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference"></a>

```python
def put_gallery_image_reference(
  offer: str,
  publisher: str,
  sku: str,
  version: str
) -> None
```

###### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference.parameter.offer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#offer DevTestWindowsVirtualMachine#offer}.

---

###### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference.parameter.publisher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#publisher DevTestWindowsVirtualMachine#publisher}.

---

###### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#sku DevTestWindowsVirtualMachine#sku}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putGalleryImageReference.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#version DevTestWindowsVirtualMachine#version}.

---

##### `put_inbound_nat_rule` <a name="put_inbound_nat_rule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putInboundNatRule"></a>

```python
def put_inbound_nat_rule(
  value: typing.Union[IResolvable, typing.List[DevTestWindowsVirtualMachineInboundNatRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putInboundNatRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#create DevTestWindowsVirtualMachine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#delete DevTestWindowsVirtualMachine#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#read DevTestWindowsVirtualMachine#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#update DevTestWindowsVirtualMachine#update}.

---

##### `reset_allow_claim` <a name="reset_allow_claim" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetAllowClaim"></a>

```python
def reset_allow_claim() -> None
```

##### `reset_disallow_public_ip_address` <a name="reset_disallow_public_ip_address" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetDisallowPublicIpAddress"></a>

```python
def reset_disallow_public_ip_address() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inbound_nat_rule` <a name="reset_inbound_nat_rule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetInboundNatRule"></a>

```python
def reset_inbound_nat_rule() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DevTestWindowsVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DevTestWindowsVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevTestWindowsVirtualMachine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevTestWindowsVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevTestWindowsVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReference">gallery_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference">DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRule">inbound_nat_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList">DevTestWindowsVirtualMachineInboundNatRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference">DevTestWindowsVirtualMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.uniqueIdentifier">unique_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaimInput">allow_claim_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddressInput">disallow_public_ip_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReferenceInput">gallery_image_reference_input</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRuleInput">inbound_nat_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labNameInput">lab_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetNameInput">lab_subnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkIdInput">lab_virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaim">allow_claim</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddress">disallow_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labName">lab_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetName">lab_subnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkId">lab_virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `gallery_image_reference`<sup>Required</sup> <a name="gallery_image_reference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReference"></a>

```python
gallery_image_reference: DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference">DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference</a>

---

##### `inbound_nat_rule`<sup>Required</sup> <a name="inbound_nat_rule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRule"></a>

```python
inbound_nat_rule: DevTestWindowsVirtualMachineInboundNatRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList">DevTestWindowsVirtualMachineInboundNatRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeouts"></a>

```python
timeouts: DevTestWindowsVirtualMachineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference">DevTestWindowsVirtualMachineTimeoutsOutputReference</a>

---

##### `unique_identifier`<sup>Required</sup> <a name="unique_identifier" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.uniqueIdentifier"></a>

```python
unique_identifier: str
```

- *Type:* str

---

##### `allow_claim_input`<sup>Optional</sup> <a name="allow_claim_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaimInput"></a>

```python
allow_claim_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disallow_public_ip_address_input`<sup>Optional</sup> <a name="disallow_public_ip_address_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddressInput"></a>

```python
disallow_public_ip_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gallery_image_reference_input`<sup>Optional</sup> <a name="gallery_image_reference_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.galleryImageReferenceInput"></a>

```python
gallery_image_reference_input: DevTestWindowsVirtualMachineGalleryImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inbound_nat_rule_input`<sup>Optional</sup> <a name="inbound_nat_rule_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.inboundNatRuleInput"></a>

```python
inbound_nat_rule_input: typing.Union[IResolvable, typing.List[DevTestWindowsVirtualMachineInboundNatRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>]]

---

##### `lab_name_input`<sup>Optional</sup> <a name="lab_name_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labNameInput"></a>

```python
lab_name_input: str
```

- *Type:* str

---

##### `lab_subnet_name_input`<sup>Optional</sup> <a name="lab_subnet_name_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetNameInput"></a>

```python
lab_subnet_name_input: str
```

- *Type:* str

---

##### `lab_virtual_network_id_input`<sup>Optional</sup> <a name="lab_virtual_network_id_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkIdInput"></a>

```python
lab_virtual_network_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DevTestWindowsVirtualMachineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `allow_claim`<sup>Required</sup> <a name="allow_claim" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.allowClaim"></a>

```python
allow_claim: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disallow_public_ip_address`<sup>Required</sup> <a name="disallow_public_ip_address" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.disallowPublicIpAddress"></a>

```python
disallow_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labName"></a>

```python
lab_name: str
```

- *Type:* str

---

##### `lab_subnet_name`<sup>Required</sup> <a name="lab_subnet_name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labSubnetName"></a>

```python
lab_subnet_name: str
```

- *Type:* str

---

##### `lab_virtual_network_id`<sup>Required</sup> <a name="lab_virtual_network_id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.labVirtualNetworkId"></a>

```python
lab_virtual_network_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestWindowsVirtualMachineConfig <a name="DevTestWindowsVirtualMachineConfig" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  gallery_image_reference: DevTestWindowsVirtualMachineGalleryImageReference,
  lab_name: str,
  lab_subnet_name: str,
  lab_virtual_network_id: str,
  location: str,
  name: str,
  password: str,
  resource_group_name: str,
  size: str,
  storage_type: str,
  username: str,
  allow_claim: typing.Union[bool, IResolvable] = None,
  disallow_public_ip_address: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inbound_nat_rule: typing.Union[IResolvable, typing.List[DevTestWindowsVirtualMachineInboundNatRule]] = None,
  notes: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DevTestWindowsVirtualMachineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.galleryImageReference">gallery_image_reference</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a></code> | gallery_image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labName">lab_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_name DevTestWindowsVirtualMachine#lab_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labSubnetName">lab_subnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labVirtualNetworkId">lab_virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#location DevTestWindowsVirtualMachine#location}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#name DevTestWindowsVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#password DevTestWindowsVirtualMachine#password}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#size DevTestWindowsVirtualMachine#size}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#storage_type DevTestWindowsVirtualMachine#storage_type}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#username DevTestWindowsVirtualMachine#username}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.allowClaim">allow_claim</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#allow_claim DevTestWindowsVirtualMachine#allow_claim}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.disallowPublicIpAddress">disallow_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#id DevTestWindowsVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.inboundNatRule">inbound_nat_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>]]</code> | inbound_nat_rule block. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.notes">notes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#notes DevTestWindowsVirtualMachine#notes}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#tags DevTestWindowsVirtualMachine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `gallery_image_reference`<sup>Required</sup> <a name="gallery_image_reference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.galleryImageReference"></a>

```python
gallery_image_reference: DevTestWindowsVirtualMachineGalleryImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

gallery_image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#gallery_image_reference DevTestWindowsVirtualMachine#gallery_image_reference}

---

##### `lab_name`<sup>Required</sup> <a name="lab_name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labName"></a>

```python
lab_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_name DevTestWindowsVirtualMachine#lab_name}.

---

##### `lab_subnet_name`<sup>Required</sup> <a name="lab_subnet_name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labSubnetName"></a>

```python
lab_subnet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}.

---

##### `lab_virtual_network_id`<sup>Required</sup> <a name="lab_virtual_network_id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.labVirtualNetworkId"></a>

```python
lab_virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#location DevTestWindowsVirtualMachine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#name DevTestWindowsVirtualMachine#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#password DevTestWindowsVirtualMachine#password}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.size"></a>

```python
size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#size DevTestWindowsVirtualMachine#size}.

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#storage_type DevTestWindowsVirtualMachine#storage_type}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#username DevTestWindowsVirtualMachine#username}.

---

##### `allow_claim`<sup>Optional</sup> <a name="allow_claim" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.allowClaim"></a>

```python
allow_claim: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#allow_claim DevTestWindowsVirtualMachine#allow_claim}.

---

##### `disallow_public_ip_address`<sup>Optional</sup> <a name="disallow_public_ip_address" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.disallowPublicIpAddress"></a>

```python
disallow_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#id DevTestWindowsVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_nat_rule`<sup>Optional</sup> <a name="inbound_nat_rule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.inboundNatRule"></a>

```python
inbound_nat_rule: typing.Union[IResolvable, typing.List[DevTestWindowsVirtualMachineInboundNatRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>]]

inbound_nat_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#inbound_nat_rule DevTestWindowsVirtualMachine#inbound_nat_rule}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.notes"></a>

```python
notes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#notes DevTestWindowsVirtualMachine#notes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#tags DevTestWindowsVirtualMachine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineConfig.property.timeouts"></a>

```python
timeouts: DevTestWindowsVirtualMachineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#timeouts DevTestWindowsVirtualMachine#timeouts}

---

### DevTestWindowsVirtualMachineGalleryImageReference <a name="DevTestWindowsVirtualMachineGalleryImageReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference(
  offer: str,
  publisher: str,
  sku: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.offer">offer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#offer DevTestWindowsVirtualMachine#offer}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.publisher">publisher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#publisher DevTestWindowsVirtualMachine#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#sku DevTestWindowsVirtualMachine#sku}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#version DevTestWindowsVirtualMachine#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#offer DevTestWindowsVirtualMachine#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#publisher DevTestWindowsVirtualMachine#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#sku DevTestWindowsVirtualMachine#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#version DevTestWindowsVirtualMachine#version}.

---

### DevTestWindowsVirtualMachineInboundNatRule <a name="DevTestWindowsVirtualMachineInboundNatRule" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule(
  backend_port: typing.Union[int, float],
  protocol: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#backend_port DevTestWindowsVirtualMachine#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#protocol DevTestWindowsVirtualMachine#protocol}. |

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#backend_port DevTestWindowsVirtualMachine#backend_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#protocol DevTestWindowsVirtualMachine#protocol}.

---

### DevTestWindowsVirtualMachineTimeouts <a name="DevTestWindowsVirtualMachineTimeouts" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#create DevTestWindowsVirtualMachine#create}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#delete DevTestWindowsVirtualMachine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#read DevTestWindowsVirtualMachine#read}. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#update DevTestWindowsVirtualMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#create DevTestWindowsVirtualMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#delete DevTestWindowsVirtualMachine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#read DevTestWindowsVirtualMachine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/dev_test_windows_virtual_machine#update DevTestWindowsVirtualMachine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference <a name="DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offerInput">offer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisherInput">publisher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offer">offer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `offer_input`<sup>Optional</sup> <a name="offer_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offerInput"></a>

```python
offer_input: str
```

- *Type:* str

---

##### `publisher_input`<sup>Optional</sup> <a name="publisher_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisherInput"></a>

```python
publisher_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.offer"></a>

```python
offer: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DevTestWindowsVirtualMachineGalleryImageReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineGalleryImageReference">DevTestWindowsVirtualMachineGalleryImageReference</a>

---


### DevTestWindowsVirtualMachineInboundNatRuleList <a name="DevTestWindowsVirtualMachineInboundNatRuleList" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevTestWindowsVirtualMachineInboundNatRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DevTestWindowsVirtualMachineInboundNatRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>]]

---


### DevTestWindowsVirtualMachineInboundNatRuleOutputReference <a name="DevTestWindowsVirtualMachineInboundNatRuleOutputReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.frontendPort">frontend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPortInput">backend_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frontend_port`<sup>Required</sup> <a name="frontend_port" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.frontendPort"></a>

```python
frontend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend_port_input`<sup>Optional</sup> <a name="backend_port_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPortInput"></a>

```python
backend_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevTestWindowsVirtualMachineInboundNatRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineInboundNatRule">DevTestWindowsVirtualMachineInboundNatRule</a>]

---


### DevTestWindowsVirtualMachineTimeoutsOutputReference <a name="DevTestWindowsVirtualMachineTimeoutsOutputReference" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_test_windows_virtual_machine

devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevTestWindowsVirtualMachineTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devTestWindowsVirtualMachine.DevTestWindowsVirtualMachineTimeouts">DevTestWindowsVirtualMachineTimeouts</a>]

---



