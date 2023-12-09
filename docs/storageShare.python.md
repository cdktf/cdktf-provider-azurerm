# `storageShare` Submodule <a name="`storageShare` Submodule" id="@cdktf/provider-azurerm.storageShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageShare <a name="StorageShare" id="@cdktf/provider-azurerm.storageShare.StorageShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share azurerm_storage_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShare(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  quota: typing.Union[int, float],
  storage_account_name: str,
  access_tier: str = None,
  acl: typing.Union[IResolvable, typing.List[StorageShareAcl]] = None,
  enabled_protocol: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: StorageShareTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#name StorageShare#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.quota">quota</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#quota StorageShare#quota}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#storage_account_name StorageShare#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.accessTier">access_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#access_tier StorageShare#access_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.acl">acl</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl">StorageShareAcl</a>]]</code> | acl block. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.enabledProtocol">enabled_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#enabled_protocol StorageShare#enabled_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#id StorageShare#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#metadata StorageShare#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts">StorageShareTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#name StorageShare#name}.

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.quota"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#quota StorageShare#quota}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.storageAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#storage_account_name StorageShare#storage_account_name}.

---

##### `access_tier`<sup>Optional</sup> <a name="access_tier" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.accessTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#access_tier StorageShare#access_tier}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.acl"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl">StorageShareAcl</a>]]

acl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#acl StorageShare#acl}

---

##### `enabled_protocol`<sup>Optional</sup> <a name="enabled_protocol" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.enabledProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#enabled_protocol StorageShare#enabled_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#id StorageShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#metadata StorageShare#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageShare.StorageShare.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts">StorageShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#timeouts StorageShare#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.putAcl">put_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.resetAccessTier">reset_access_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.resetEnabledProtocol">reset_enabled_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageShare.StorageShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.storageShare.StorageShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageShare.StorageShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageShare.StorageShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.storageShare.StorageShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.storageShare.StorageShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.storageShare.StorageShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.storageShare.StorageShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.storageShare.StorageShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.storageShare.StorageShare.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageShare.StorageShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.storageShare.StorageShare.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.storageShare.StorageShare.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShare.StorageShare.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageShare.StorageShare.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.storageShare.StorageShare.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShare.StorageShare.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.storageShare.StorageShare.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageShare.StorageShare.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageShare.StorageShare.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.storageShare.StorageShare.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShare.StorageShare.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_acl` <a name="put_acl" id="@cdktf/provider-azurerm.storageShare.StorageShare.putAcl"></a>

```python
def put_acl(
  value: typing.Union[IResolvable, typing.List[StorageShareAcl]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageShare.StorageShare.putAcl.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl">StorageShareAcl</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.storageShare.StorageShare.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageShare.StorageShare.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#create StorageShare#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageShare.StorageShare.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#delete StorageShare#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageShare.StorageShare.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#read StorageShare#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageShare.StorageShare.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#update StorageShare#update}.

---

##### `reset_access_tier` <a name="reset_access_tier" id="@cdktf/provider-azurerm.storageShare.StorageShare.resetAccessTier"></a>

```python
def reset_access_tier() -> None
```

##### `reset_acl` <a name="reset_acl" id="@cdktf/provider-azurerm.storageShare.StorageShare.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_enabled_protocol` <a name="reset_enabled_protocol" id="@cdktf/provider-azurerm.storageShare.StorageShare.resetEnabledProtocol"></a>

```python
def reset_enabled_protocol() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.storageShare.StorageShare.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-azurerm.storageShare.StorageShare.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.storageShare.StorageShare.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageShare resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.storageShare.StorageShare.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShare.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageShare.StorageShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.storageShare.StorageShare.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageShare.StorageShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.storageShare.StorageShare.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShare.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageShare.StorageShare.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.storageShare.StorageShare.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShare.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageShare.StorageShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.storageShare.StorageShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageShare to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.storageShare.StorageShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageShare.StorageShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.acl">acl</a></code> | <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList">StorageShareAclList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.resourceManagerId">resource_manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference">StorageShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.accessTierInput">access_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.aclInput">acl_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl">StorageShareAcl</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.enabledProtocolInput">enabled_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.quotaInput">quota_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts">StorageShareTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.accessTier">access_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.enabledProtocol">enabled_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.quota">quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.acl"></a>

```python
acl: StorageShareAclList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList">StorageShareAclList</a>

---

##### `resource_manager_id`<sup>Required</sup> <a name="resource_manager_id" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.resourceManagerId"></a>

```python
resource_manager_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.timeouts"></a>

```python
timeouts: StorageShareTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference">StorageShareTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `access_tier_input`<sup>Optional</sup> <a name="access_tier_input" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.accessTierInput"></a>

```python
access_tier_input: str
```

- *Type:* str

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.aclInput"></a>

```python
acl_input: typing.Union[IResolvable, typing.List[StorageShareAcl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl">StorageShareAcl</a>]]

---

##### `enabled_protocol_input`<sup>Optional</sup> <a name="enabled_protocol_input" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.enabledProtocolInput"></a>

```python
enabled_protocol_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `quota_input`<sup>Optional</sup> <a name="quota_input" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.quotaInput"></a>

```python
quota_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageShareTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts">StorageShareTimeouts</a>]

---

##### `access_tier`<sup>Required</sup> <a name="access_tier" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.accessTier"></a>

```python
access_tier: str
```

- *Type:* str

---

##### `enabled_protocol`<sup>Required</sup> <a name="enabled_protocol" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.enabledProtocol"></a>

```python
enabled_protocol: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.quota"></a>

```python
quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageShare.StorageShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageShareAcl <a name="StorageShareAcl" id="@cdktf/provider-azurerm.storageShare.StorageShareAcl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageShare.StorageShareAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShareAcl(
  id: str,
  access_policy: typing.Union[IResolvable, typing.List[StorageShareAclAccessPolicy]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#id StorageShare#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl.property.accessPolicy">access_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy">StorageShareAclAccessPolicy</a>]]</code> | access_policy block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShare.StorageShareAcl.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#id StorageShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `access_policy`<sup>Optional</sup> <a name="access_policy" id="@cdktf/provider-azurerm.storageShare.StorageShareAcl.property.accessPolicy"></a>

```python
access_policy: typing.Union[IResolvable, typing.List[StorageShareAclAccessPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy">StorageShareAclAccessPolicy</a>]]

access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#access_policy StorageShare#access_policy}

---

### StorageShareAclAccessPolicy <a name="StorageShareAclAccessPolicy" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShareAclAccessPolicy(
  permissions: str,
  expiry: str = None,
  start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy.property.permissions">permissions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#permissions StorageShare#permissions}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy.property.expiry">expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#expiry StorageShare#expiry}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#start StorageShare#start}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#permissions StorageShare#permissions}.

---

##### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#expiry StorageShare#expiry}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#start StorageShare#start}.

---

### StorageShareConfig <a name="StorageShareConfig" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShareConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  quota: typing.Union[int, float],
  storage_account_name: str,
  access_tier: str = None,
  acl: typing.Union[IResolvable, typing.List[StorageShareAcl]] = None,
  enabled_protocol: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: StorageShareTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#name StorageShare#name}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.quota">quota</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#quota StorageShare#quota}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#storage_account_name StorageShare#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.accessTier">access_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#access_tier StorageShare#access_tier}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.acl">acl</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl">StorageShareAcl</a>]]</code> | acl block. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.enabledProtocol">enabled_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#enabled_protocol StorageShare#enabled_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#id StorageShare#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#metadata StorageShare#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts">StorageShareTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#name StorageShare#name}.

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.quota"></a>

```python
quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#quota StorageShare#quota}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#storage_account_name StorageShare#storage_account_name}.

---

##### `access_tier`<sup>Optional</sup> <a name="access_tier" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.accessTier"></a>

```python
access_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#access_tier StorageShare#access_tier}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.acl"></a>

```python
acl: typing.Union[IResolvable, typing.List[StorageShareAcl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl">StorageShareAcl</a>]]

acl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#acl StorageShare#acl}

---

##### `enabled_protocol`<sup>Optional</sup> <a name="enabled_protocol" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.enabledProtocol"></a>

```python
enabled_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#enabled_protocol StorageShare#enabled_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#id StorageShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#metadata StorageShare#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageShare.StorageShareConfig.property.timeouts"></a>

```python
timeouts: StorageShareTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts">StorageShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#timeouts StorageShare#timeouts}

---

### StorageShareTimeouts <a name="StorageShareTimeouts" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShareTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#create StorageShare#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#delete StorageShare#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#read StorageShare#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#update StorageShare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#create StorageShare#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#delete StorageShare#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#read StorageShare#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/storage_share#update StorageShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageShareAclAccessPolicyList <a name="StorageShareAclAccessPolicyList" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShareAclAccessPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageShareAclAccessPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy">StorageShareAclAccessPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageShareAclAccessPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy">StorageShareAclAccessPolicy</a>]]

---


### StorageShareAclAccessPolicyOutputReference <a name="StorageShareAclAccessPolicyOutputReference" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShareAclAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.resetExpiry">reset_expiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.resetStart">reset_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiry` <a name="reset_expiry" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.resetExpiry"></a>

```python
def reset_expiry() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.resetStart"></a>

```python
def reset_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.expiryInput">expiry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy">StorageShareAclAccessPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiry_input`<sup>Optional</sup> <a name="expiry_input" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.expiryInput"></a>

```python
expiry_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageShareAclAccessPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy">StorageShareAclAccessPolicy</a>]

---


### StorageShareAclList <a name="StorageShareAclList" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShareAclList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageShareAclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl">StorageShareAcl</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageShare.StorageShareAclList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageShareAcl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl">StorageShareAcl</a>]]

---


### StorageShareAclOutputReference <a name="StorageShareAclOutputReference" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShareAclOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.putAccessPolicy">put_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.resetAccessPolicy">reset_access_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_policy` <a name="put_access_policy" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.putAccessPolicy"></a>

```python
def put_access_policy(
  value: typing.Union[IResolvable, typing.List[StorageShareAclAccessPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.putAccessPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy">StorageShareAclAccessPolicy</a>]]

---

##### `reset_access_policy` <a name="reset_access_policy" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.resetAccessPolicy"></a>

```python
def reset_access_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.accessPolicy">access_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList">StorageShareAclAccessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.accessPolicyInput">access_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy">StorageShareAclAccessPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl">StorageShareAcl</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_policy`<sup>Required</sup> <a name="access_policy" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.accessPolicy"></a>

```python
access_policy: StorageShareAclAccessPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicyList">StorageShareAclAccessPolicyList</a>

---

##### `access_policy_input`<sup>Optional</sup> <a name="access_policy_input" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.accessPolicyInput"></a>

```python
access_policy_input: typing.Union[IResolvable, typing.List[StorageShareAclAccessPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageShare.StorageShareAclAccessPolicy">StorageShareAclAccessPolicy</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageShare.StorageShareAclOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageShareAcl]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageShare.StorageShareAcl">StorageShareAcl</a>]

---


### StorageShareTimeoutsOutputReference <a name="StorageShareTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_share

storageShare.StorageShareTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts">StorageShareTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageShare.StorageShareTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageShareTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageShare.StorageShareTimeouts">StorageShareTimeouts</a>]

---



