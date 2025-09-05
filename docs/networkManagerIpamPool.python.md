# `networkManagerIpamPool` Submodule <a name="`networkManagerIpamPool` Submodule" id="@cdktf/provider-azurerm.networkManagerIpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerIpamPool <a name="NetworkManagerIpamPool" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool azurerm_network_manager_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_ipam_pool

networkManagerIpamPool.NetworkManagerIpamPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_prefixes: typing.List[str],
  location: str,
  name: str,
  network_manager_id: str,
  description: str = None,
  display_name: str = None,
  id: str = None,
  parent_pool_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetworkManagerIpamPoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.addressPrefixes">address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#address_prefixes NetworkManagerIpamPool#address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#location NetworkManagerIpamPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#name NetworkManagerIpamPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.networkManagerId">network_manager_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#network_manager_id NetworkManagerIpamPool#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#description NetworkManagerIpamPool#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#display_name NetworkManagerIpamPool#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#id NetworkManagerIpamPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.parentPoolName">parent_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#parent_pool_name NetworkManagerIpamPool#parent_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#tags NetworkManagerIpamPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_prefixes`<sup>Required</sup> <a name="address_prefixes" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.addressPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#address_prefixes NetworkManagerIpamPool#address_prefixes}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#location NetworkManagerIpamPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#name NetworkManagerIpamPool#name}.

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.networkManagerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#network_manager_id NetworkManagerIpamPool#network_manager_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#description NetworkManagerIpamPool#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#display_name NetworkManagerIpamPool#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#id NetworkManagerIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_pool_name`<sup>Optional</sup> <a name="parent_pool_name" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.parentPoolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#parent_pool_name NetworkManagerIpamPool#parent_pool_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#tags NetworkManagerIpamPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#timeouts NetworkManagerIpamPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetParentPoolName">reset_parent_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#create NetworkManagerIpamPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#delete NetworkManagerIpamPool#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#read NetworkManagerIpamPool#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#update NetworkManagerIpamPool#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent_pool_name` <a name="reset_parent_pool_name" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetParentPoolName"></a>

```python
def reset_parent_pool_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkManagerIpamPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_ipam_pool

networkManagerIpamPool.NetworkManagerIpamPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_ipam_pool

networkManagerIpamPool.NetworkManagerIpamPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_ipam_pool

networkManagerIpamPool.NetworkManagerIpamPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_ipam_pool

networkManagerIpamPool.NetworkManagerIpamPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkManagerIpamPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkManagerIpamPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkManagerIpamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkManagerIpamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference">NetworkManagerIpamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.addressPrefixesInput">address_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.networkManagerIdInput">network_manager_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.parentPoolNameInput">parent_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.addressPrefixes">address_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.networkManagerId">network_manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.parentPoolName">parent_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.timeouts"></a>

```python
timeouts: NetworkManagerIpamPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference">NetworkManagerIpamPoolTimeoutsOutputReference</a>

---

##### `address_prefixes_input`<sup>Optional</sup> <a name="address_prefixes_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.addressPrefixesInput"></a>

```python
address_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_manager_id_input`<sup>Optional</sup> <a name="network_manager_id_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.networkManagerIdInput"></a>

```python
network_manager_id_input: str
```

- *Type:* str

---

##### `parent_pool_name_input`<sup>Optional</sup> <a name="parent_pool_name_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.parentPoolNameInput"></a>

```python
parent_pool_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkManagerIpamPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a>]

---

##### `address_prefixes`<sup>Required</sup> <a name="address_prefixes" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.addressPrefixes"></a>

```python
address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.networkManagerId"></a>

```python
network_manager_id: str
```

- *Type:* str

---

##### `parent_pool_name`<sup>Required</sup> <a name="parent_pool_name" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.parentPoolName"></a>

```python
parent_pool_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerIpamPoolConfig <a name="NetworkManagerIpamPoolConfig" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_ipam_pool

networkManagerIpamPool.NetworkManagerIpamPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_prefixes: typing.List[str],
  location: str,
  name: str,
  network_manager_id: str,
  description: str = None,
  display_name: str = None,
  id: str = None,
  parent_pool_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetworkManagerIpamPoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.addressPrefixes">address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#address_prefixes NetworkManagerIpamPool#address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#location NetworkManagerIpamPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#name NetworkManagerIpamPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.networkManagerId">network_manager_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#network_manager_id NetworkManagerIpamPool#network_manager_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#description NetworkManagerIpamPool#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#display_name NetworkManagerIpamPool#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#id NetworkManagerIpamPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.parentPoolName">parent_pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#parent_pool_name NetworkManagerIpamPool#parent_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#tags NetworkManagerIpamPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_prefixes`<sup>Required</sup> <a name="address_prefixes" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.addressPrefixes"></a>

```python
address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#address_prefixes NetworkManagerIpamPool#address_prefixes}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#location NetworkManagerIpamPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#name NetworkManagerIpamPool#name}.

---

##### `network_manager_id`<sup>Required</sup> <a name="network_manager_id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.networkManagerId"></a>

```python
network_manager_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#network_manager_id NetworkManagerIpamPool#network_manager_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#description NetworkManagerIpamPool#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#display_name NetworkManagerIpamPool#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#id NetworkManagerIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_pool_name`<sup>Optional</sup> <a name="parent_pool_name" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.parentPoolName"></a>

```python
parent_pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#parent_pool_name NetworkManagerIpamPool#parent_pool_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#tags NetworkManagerIpamPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.timeouts"></a>

```python
timeouts: NetworkManagerIpamPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#timeouts NetworkManagerIpamPool#timeouts}

---

### NetworkManagerIpamPoolTimeouts <a name="NetworkManagerIpamPoolTimeouts" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_ipam_pool

networkManagerIpamPool.NetworkManagerIpamPoolTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#create NetworkManagerIpamPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#delete NetworkManagerIpamPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#read NetworkManagerIpamPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#update NetworkManagerIpamPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#create NetworkManagerIpamPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#delete NetworkManagerIpamPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#read NetworkManagerIpamPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/network_manager_ipam_pool#update NetworkManagerIpamPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerIpamPoolTimeoutsOutputReference <a name="NetworkManagerIpamPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_manager_ipam_pool

networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkManagerIpamPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a>]

---



