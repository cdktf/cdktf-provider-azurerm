# `storageAccountStaticWebsite` Submodule <a name="`storageAccountStaticWebsite` Submodule" id="@cdktf/provider-azurerm.storageAccountStaticWebsite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountStaticWebsiteA <a name="StorageAccountStaticWebsiteA" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website azurerm_storage_account_static_website}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_static_website

storageAccountStaticWebsite.StorageAccountStaticWebsiteA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_account_id: str,
  error404_document: str = None,
  id: str = None,
  index_document: str = None,
  timeouts: StorageAccountStaticWebsiteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#storage_account_id StorageAccountStaticWebsiteA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.error404Document">error404_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#error_404_document StorageAccountStaticWebsiteA#error_404_document}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#id StorageAccountStaticWebsiteA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.indexDocument">index_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#index_document StorageAccountStaticWebsiteA#index_document}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#storage_account_id StorageAccountStaticWebsiteA#storage_account_id}.

---

##### `error404_document`<sup>Optional</sup> <a name="error404_document" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.error404Document"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#error_404_document StorageAccountStaticWebsiteA#error_404_document}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#id StorageAccountStaticWebsiteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.indexDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#index_document StorageAccountStaticWebsiteA#index_document}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#timeouts StorageAccountStaticWebsiteA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetError404Document">reset_error404_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetIndexDocument">reset_index_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#create StorageAccountStaticWebsiteA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#delete StorageAccountStaticWebsiteA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#read StorageAccountStaticWebsiteA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#update StorageAccountStaticWebsiteA#update}.

---

##### `reset_error404_document` <a name="reset_error404_document" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetError404Document"></a>

```python
def reset_error404_document() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_index_document` <a name="reset_index_document" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetIndexDocument"></a>

```python
def reset_index_document() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageAccountStaticWebsiteA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_static_website

storageAccountStaticWebsite.StorageAccountStaticWebsiteA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_static_website

storageAccountStaticWebsite.StorageAccountStaticWebsiteA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_static_website

storageAccountStaticWebsite.StorageAccountStaticWebsiteA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_static_website

storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageAccountStaticWebsiteA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageAccountStaticWebsiteA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageAccountStaticWebsiteA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccountStaticWebsiteA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference">StorageAccountStaticWebsiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.error404DocumentInput">error404_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.indexDocumentInput">index_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.error404Document">error404_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.indexDocument">index_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.timeouts"></a>

```python
timeouts: StorageAccountStaticWebsiteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference">StorageAccountStaticWebsiteTimeoutsOutputReference</a>

---

##### `error404_document_input`<sup>Optional</sup> <a name="error404_document_input" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.error404DocumentInput"></a>

```python
error404_document_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_document_input`<sup>Optional</sup> <a name="index_document_input" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.indexDocumentInput"></a>

```python
index_document_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageAccountStaticWebsiteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>]

---

##### `error404_document`<sup>Required</sup> <a name="error404_document" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.error404Document"></a>

```python
error404_document: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_document`<sup>Required</sup> <a name="index_document" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountStaticWebsiteAConfig <a name="StorageAccountStaticWebsiteAConfig" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_static_website

storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_account_id: str,
  error404_document: str = None,
  id: str = None,
  index_document: str = None,
  timeouts: StorageAccountStaticWebsiteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#storage_account_id StorageAccountStaticWebsiteA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.error404Document">error404_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#error_404_document StorageAccountStaticWebsiteA#error_404_document}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#id StorageAccountStaticWebsiteA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.indexDocument">index_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#index_document StorageAccountStaticWebsiteA#index_document}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#storage_account_id StorageAccountStaticWebsiteA#storage_account_id}.

---

##### `error404_document`<sup>Optional</sup> <a name="error404_document" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.error404Document"></a>

```python
error404_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#error_404_document StorageAccountStaticWebsiteA#error_404_document}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#id StorageAccountStaticWebsiteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#index_document StorageAccountStaticWebsiteA#index_document}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteAConfig.property.timeouts"></a>

```python
timeouts: StorageAccountStaticWebsiteTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#timeouts StorageAccountStaticWebsiteA#timeouts}

---

### StorageAccountStaticWebsiteTimeouts <a name="StorageAccountStaticWebsiteTimeouts" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_static_website

storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#create StorageAccountStaticWebsiteA#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#delete StorageAccountStaticWebsiteA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#read StorageAccountStaticWebsiteA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#update StorageAccountStaticWebsiteA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#create StorageAccountStaticWebsiteA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#delete StorageAccountStaticWebsiteA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#read StorageAccountStaticWebsiteA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/storage_account_static_website#update StorageAccountStaticWebsiteA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountStaticWebsiteTimeoutsOutputReference <a name="StorageAccountStaticWebsiteTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_static_website

storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageAccountStaticWebsiteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>]

---



