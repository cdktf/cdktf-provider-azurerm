# `publicIpPrefix` Submodule <a name="`publicIpPrefix` Submodule" id="@cdktf/provider-azurerm.publicIpPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PublicIpPrefix <a name="PublicIpPrefix" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix azurerm_public_ip_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import public_ip_prefix

publicIpPrefix.PublicIpPrefix(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  ip_version: str = None,
  prefix_length: typing.Union[int, float] = None,
  sku: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PublicIpPrefixTimeouts = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#location PublicIpPrefix#location}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#name PublicIpPrefix#name}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#resource_group_name PublicIpPrefix#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#id PublicIpPrefix#id}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.ipVersion">ip_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#ip_version PublicIpPrefix#ip_version}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#prefix_length PublicIpPrefix#prefix_length}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#sku PublicIpPrefix#sku}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#tags PublicIpPrefix#tags}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#zones PublicIpPrefix#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#location PublicIpPrefix#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#name PublicIpPrefix#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#resource_group_name PublicIpPrefix#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#id PublicIpPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.ipVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#ip_version PublicIpPrefix#ip_version}.

---

##### `prefix_length`<sup>Optional</sup> <a name="prefix_length" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.prefixLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#prefix_length PublicIpPrefix#prefix_length}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#sku PublicIpPrefix#sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#tags PublicIpPrefix#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#timeouts PublicIpPrefix#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#zones PublicIpPrefix#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetPrefixLength">reset_prefix_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetSku">reset_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#create PublicIpPrefix#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#delete PublicIpPrefix#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#read PublicIpPrefix#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#update PublicIpPrefix#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_prefix_length` <a name="reset_prefix_length" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetPrefixLength"></a>

```python
def reset_prefix_length() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetSku"></a>

```python
def reset_sku() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PublicIpPrefix resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import public_ip_prefix

publicIpPrefix.PublicIpPrefix.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import public_ip_prefix

publicIpPrefix.PublicIpPrefix.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import public_ip_prefix

publicIpPrefix.PublicIpPrefix.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import public_ip_prefix

publicIpPrefix.PublicIpPrefix.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PublicIpPrefix resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PublicIpPrefix to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PublicIpPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PublicIpPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipPrefix">ip_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference">PublicIpPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersionInput">ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLengthInput">prefix_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_prefix`<sup>Required</sup> <a name="ip_prefix" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipPrefix"></a>

```python
ip_prefix: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeouts"></a>

```python
timeouts: PublicIpPrefixTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference">PublicIpPrefixTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersionInput"></a>

```python
ip_version_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `prefix_length_input`<sup>Optional</sup> <a name="prefix_length_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLengthInput"></a>

```python
prefix_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PublicIpPrefixTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>]

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prefix_length`<sup>Required</sup> <a name="prefix_length" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefix.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PublicIpPrefixConfig <a name="PublicIpPrefixConfig" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import public_ip_prefix

publicIpPrefix.PublicIpPrefixConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  ip_version: str = None,
  prefix_length: typing.Union[int, float] = None,
  sku: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PublicIpPrefixTimeouts = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#location PublicIpPrefix#location}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#name PublicIpPrefix#name}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#resource_group_name PublicIpPrefix#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#id PublicIpPrefix#id}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.ipVersion">ip_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#ip_version PublicIpPrefix#ip_version}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.prefixLength">prefix_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#prefix_length PublicIpPrefix#prefix_length}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#sku PublicIpPrefix#sku}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#tags PublicIpPrefix#tags}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#zones PublicIpPrefix#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#location PublicIpPrefix#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#name PublicIpPrefix#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#resource_group_name PublicIpPrefix#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#id PublicIpPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#ip_version PublicIpPrefix#ip_version}.

---

##### `prefix_length`<sup>Optional</sup> <a name="prefix_length" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.prefixLength"></a>

```python
prefix_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#prefix_length PublicIpPrefix#prefix_length}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#sku PublicIpPrefix#sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#tags PublicIpPrefix#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.timeouts"></a>

```python
timeouts: PublicIpPrefixTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#timeouts PublicIpPrefix#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#zones PublicIpPrefix#zones}.

---

### PublicIpPrefixTimeouts <a name="PublicIpPrefixTimeouts" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import public_ip_prefix

publicIpPrefix.PublicIpPrefixTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#create PublicIpPrefix#create}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#delete PublicIpPrefix#delete}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#read PublicIpPrefix#read}. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#update PublicIpPrefix#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#create PublicIpPrefix#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#delete PublicIpPrefix#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#read PublicIpPrefix#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/public_ip_prefix#update PublicIpPrefix#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PublicIpPrefixTimeoutsOutputReference <a name="PublicIpPrefixTimeoutsOutputReference" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import public_ip_prefix

publicIpPrefix.PublicIpPrefixTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PublicIpPrefixTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.publicIpPrefix.PublicIpPrefixTimeouts">PublicIpPrefixTimeouts</a>]

---



