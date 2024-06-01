# `devCenterCatalog` Submodule <a name="`devCenterCatalog` Submodule" id="@cdktf/provider-azurerm.devCenterCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterCatalog <a name="DevCenterCatalog" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog azurerm_dev_center_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalog(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dev_center_id: str,
  name: str,
  resource_group_name: str,
  catalog_adogit: DevCenterCatalogCatalogAdogit = None,
  catalog_github: DevCenterCatalogCatalogGithub = None,
  id: str = None,
  timeouts: DevCenterCatalogTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.devCenterId">dev_center_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#dev_center_id DevCenterCatalog#dev_center_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#name DevCenterCatalog#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#resource_group_name DevCenterCatalog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.catalogAdogit">catalog_adogit</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a></code> | catalog_adogit block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.catalogGithub">catalog_github</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a></code> | catalog_github block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#id DevCenterCatalog#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dev_center_id`<sup>Required</sup> <a name="dev_center_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.devCenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#dev_center_id DevCenterCatalog#dev_center_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#name DevCenterCatalog#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#resource_group_name DevCenterCatalog#resource_group_name}.

---

##### `catalog_adogit`<sup>Optional</sup> <a name="catalog_adogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.catalogAdogit"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

catalog_adogit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#catalog_adogit DevCenterCatalog#catalog_adogit}

---

##### `catalog_github`<sup>Optional</sup> <a name="catalog_github" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.catalogGithub"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

catalog_github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#catalog_github DevCenterCatalog#catalog_github}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#id DevCenterCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#timeouts DevCenterCatalog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit">put_catalog_adogit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub">put_catalog_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogAdogit">reset_catalog_adogit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogGithub">reset_catalog_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_catalog_adogit` <a name="put_catalog_adogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit"></a>

```python
def put_catalog_adogit(
  branch: str,
  key_vault_key_url: str,
  path: str,
  uri: str
) -> None
```

###### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}.

---

###### `key_vault_key_url`<sup>Required</sup> <a name="key_vault_key_url" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit.parameter.keyVaultKeyUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}.

---

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#path DevCenterCatalog#path}.

---

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}.

---

##### `put_catalog_github` <a name="put_catalog_github" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub"></a>

```python
def put_catalog_github(
  branch: str,
  key_vault_key_url: str,
  path: str,
  uri: str
) -> None
```

###### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}.

---

###### `key_vault_key_url`<sup>Required</sup> <a name="key_vault_key_url" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub.parameter.keyVaultKeyUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}.

---

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#path DevCenterCatalog#path}.

---

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#create DevCenterCatalog#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#delete DevCenterCatalog#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#read DevCenterCatalog#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#update DevCenterCatalog#update}.

---

##### `reset_catalog_adogit` <a name="reset_catalog_adogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogAdogit"></a>

```python
def reset_catalog_adogit() -> None
```

##### `reset_catalog_github` <a name="reset_catalog_github" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogGithub"></a>

```python
def reset_catalog_github() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DevCenterCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DevCenterCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevCenterCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevCenterCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DevCenterCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogit">catalog_adogit</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference">DevCenterCatalogCatalogAdogitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithub">catalog_github</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference">DevCenterCatalogCatalogGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference">DevCenterCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogitInput">catalog_adogit_input</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithubInput">catalog_github_input</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterIdInput">dev_center_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterId">dev_center_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_adogit`<sup>Required</sup> <a name="catalog_adogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogit"></a>

```python
catalog_adogit: DevCenterCatalogCatalogAdogitOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference">DevCenterCatalogCatalogAdogitOutputReference</a>

---

##### `catalog_github`<sup>Required</sup> <a name="catalog_github" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithub"></a>

```python
catalog_github: DevCenterCatalogCatalogGithubOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference">DevCenterCatalogCatalogGithubOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeouts"></a>

```python
timeouts: DevCenterCatalogTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference">DevCenterCatalogTimeoutsOutputReference</a>

---

##### `catalog_adogit_input`<sup>Optional</sup> <a name="catalog_adogit_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogitInput"></a>

```python
catalog_adogit_input: DevCenterCatalogCatalogAdogit
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

---

##### `catalog_github_input`<sup>Optional</sup> <a name="catalog_github_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithubInput"></a>

```python
catalog_github_input: DevCenterCatalogCatalogGithub
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

---

##### `dev_center_id_input`<sup>Optional</sup> <a name="dev_center_id_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterIdInput"></a>

```python
dev_center_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DevCenterCatalogTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>]

---

##### `dev_center_id`<sup>Required</sup> <a name="dev_center_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterId"></a>

```python
dev_center_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterCatalogCatalogAdogit <a name="DevCenterCatalogCatalogAdogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalogCatalogAdogit(
  branch: str,
  key_vault_key_url: str,
  path: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.keyVaultKeyUrl">key_vault_key_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#path DevCenterCatalog#path}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}.

---

##### `key_vault_key_url`<sup>Required</sup> <a name="key_vault_key_url" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.keyVaultKeyUrl"></a>

```python
key_vault_key_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#path DevCenterCatalog#path}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}.

---

### DevCenterCatalogCatalogGithub <a name="DevCenterCatalogCatalogGithub" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalogCatalogGithub(
  branch: str,
  key_vault_key_url: str,
  path: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.keyVaultKeyUrl">key_vault_key_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#path DevCenterCatalog#path}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}. |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}.

---

##### `key_vault_key_url`<sup>Required</sup> <a name="key_vault_key_url" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.keyVaultKeyUrl"></a>

```python
key_vault_key_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#path DevCenterCatalog#path}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}.

---

### DevCenterCatalogConfig <a name="DevCenterCatalogConfig" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalogConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dev_center_id: str,
  name: str,
  resource_group_name: str,
  catalog_adogit: DevCenterCatalogCatalogAdogit = None,
  catalog_github: DevCenterCatalogCatalogGithub = None,
  id: str = None,
  timeouts: DevCenterCatalogTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.devCenterId">dev_center_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#dev_center_id DevCenterCatalog#dev_center_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#name DevCenterCatalog#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#resource_group_name DevCenterCatalog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogAdogit">catalog_adogit</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a></code> | catalog_adogit block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogGithub">catalog_github</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a></code> | catalog_github block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#id DevCenterCatalog#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dev_center_id`<sup>Required</sup> <a name="dev_center_id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.devCenterId"></a>

```python
dev_center_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#dev_center_id DevCenterCatalog#dev_center_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#name DevCenterCatalog#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#resource_group_name DevCenterCatalog#resource_group_name}.

---

##### `catalog_adogit`<sup>Optional</sup> <a name="catalog_adogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogAdogit"></a>

```python
catalog_adogit: DevCenterCatalogCatalogAdogit
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

catalog_adogit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#catalog_adogit DevCenterCatalog#catalog_adogit}

---

##### `catalog_github`<sup>Optional</sup> <a name="catalog_github" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogGithub"></a>

```python
catalog_github: DevCenterCatalogCatalogGithub
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

catalog_github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#catalog_github DevCenterCatalog#catalog_github}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#id DevCenterCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.timeouts"></a>

```python
timeouts: DevCenterCatalogTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#timeouts DevCenterCatalog#timeouts}

---

### DevCenterCatalogTimeouts <a name="DevCenterCatalogTimeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalogTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#create DevCenterCatalog#create}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#delete DevCenterCatalog#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#read DevCenterCatalog#read}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#update DevCenterCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#create DevCenterCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#delete DevCenterCatalog#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#read DevCenterCatalog#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.106.1/docs/resources/dev_center_catalog#update DevCenterCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterCatalogCatalogAdogitOutputReference <a name="DevCenterCatalogCatalogAdogitOutputReference" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrlInput">key_vault_key_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrl">key_vault_key_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `key_vault_key_url_input`<sup>Optional</sup> <a name="key_vault_key_url_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrlInput"></a>

```python
key_vault_key_url_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `key_vault_key_url`<sup>Required</sup> <a name="key_vault_key_url" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrl"></a>

```python
key_vault_key_url: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.internalValue"></a>

```python
internal_value: DevCenterCatalogCatalogAdogit
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

---


### DevCenterCatalogCatalogGithubOutputReference <a name="DevCenterCatalogCatalogGithubOutputReference" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrlInput">key_vault_key_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrl">key_vault_key_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `key_vault_key_url_input`<sup>Optional</sup> <a name="key_vault_key_url_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrlInput"></a>

```python
key_vault_key_url_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `key_vault_key_url`<sup>Required</sup> <a name="key_vault_key_url" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrl"></a>

```python
key_vault_key_url: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.internalValue"></a>

```python
internal_value: DevCenterCatalogCatalogGithub
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

---


### DevCenterCatalogTimeoutsOutputReference <a name="DevCenterCatalogTimeoutsOutputReference" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import dev_center_catalog

devCenterCatalog.DevCenterCatalogTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DevCenterCatalogTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>]

---



