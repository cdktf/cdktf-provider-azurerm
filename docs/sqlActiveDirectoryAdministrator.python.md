# `sqlActiveDirectoryAdministrator` Submodule <a name="`sqlActiveDirectoryAdministrator` Submodule" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlActiveDirectoryAdministrator <a name="SqlActiveDirectoryAdministrator" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator azurerm_sql_active_directory_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_active_directory_administrator

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  login: str,
  object_id: str,
  resource_group_name: str,
  server_name: str,
  tenant_id: str,
  azuread_authentication_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: SqlActiveDirectoryAdministratorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.login">login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#login SqlActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#object_id SqlActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#resource_group_name SqlActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#server_name SqlActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#tenant_id SqlActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.azureadAuthenticationOnly">azuread_authentication_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#azuread_authentication_only SqlActiveDirectoryAdministrator#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#id SqlActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.login"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#login SqlActiveDirectoryAdministrator#login}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#object_id SqlActiveDirectoryAdministrator#object_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#resource_group_name SqlActiveDirectoryAdministrator#resource_group_name}.

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#server_name SqlActiveDirectoryAdministrator#server_name}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#tenant_id SqlActiveDirectoryAdministrator#tenant_id}.

---

##### `azuread_authentication_only`<sup>Optional</sup> <a name="azuread_authentication_only" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.azureadAuthenticationOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#azuread_authentication_only SqlActiveDirectoryAdministrator#azuread_authentication_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#id SqlActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#timeouts SqlActiveDirectoryAdministrator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetAzureadAuthenticationOnly">reset_azuread_authentication_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#create SqlActiveDirectoryAdministrator#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#delete SqlActiveDirectoryAdministrator#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#read SqlActiveDirectoryAdministrator#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#update SqlActiveDirectoryAdministrator#update}.

---

##### `reset_azuread_authentication_only` <a name="reset_azuread_authentication_only" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetAzureadAuthenticationOnly"></a>

```python
def reset_azuread_authentication_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SqlActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_active_directory_administrator

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_active_directory_administrator

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_active_directory_administrator

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_active_directory_administrator

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SqlActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SqlActiveDirectoryAdministrator to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SqlActiveDirectoryAdministrator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SqlActiveDirectoryAdministrator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference">SqlActiveDirectoryAdministratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput">azuread_authentication_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.loginInput">login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnly">azuread_authentication_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeouts"></a>

```python
timeouts: SqlActiveDirectoryAdministratorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference">SqlActiveDirectoryAdministratorTimeoutsOutputReference</a>

---

##### `azuread_authentication_only_input`<sup>Optional</sup> <a name="azuread_authentication_only_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnlyInput"></a>

```python
azuread_authentication_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.loginInput"></a>

```python
login_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SqlActiveDirectoryAdministratorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>]

---

##### `azuread_authentication_only`<sup>Required</sup> <a name="azuread_authentication_only" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.azureadAuthenticationOnly"></a>

```python
azuread_authentication_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministrator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SqlActiveDirectoryAdministratorConfig <a name="SqlActiveDirectoryAdministratorConfig" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_active_directory_administrator

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  login: str,
  object_id: str,
  resource_group_name: str,
  server_name: str,
  tenant_id: str,
  azuread_authentication_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: SqlActiveDirectoryAdministratorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.login">login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#login SqlActiveDirectoryAdministrator#login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#object_id SqlActiveDirectoryAdministrator#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#resource_group_name SqlActiveDirectoryAdministrator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#server_name SqlActiveDirectoryAdministrator#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#tenant_id SqlActiveDirectoryAdministrator#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly">azuread_authentication_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#azuread_authentication_only SqlActiveDirectoryAdministrator#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#id SqlActiveDirectoryAdministrator#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.login"></a>

```python
login: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#login SqlActiveDirectoryAdministrator#login}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#object_id SqlActiveDirectoryAdministrator#object_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#resource_group_name SqlActiveDirectoryAdministrator#resource_group_name}.

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#server_name SqlActiveDirectoryAdministrator#server_name}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#tenant_id SqlActiveDirectoryAdministrator#tenant_id}.

---

##### `azuread_authentication_only`<sup>Optional</sup> <a name="azuread_authentication_only" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.azureadAuthenticationOnly"></a>

```python
azuread_authentication_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#azuread_authentication_only SqlActiveDirectoryAdministrator#azuread_authentication_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#id SqlActiveDirectoryAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorConfig.property.timeouts"></a>

```python
timeouts: SqlActiveDirectoryAdministratorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#timeouts SqlActiveDirectoryAdministrator#timeouts}

---

### SqlActiveDirectoryAdministratorTimeouts <a name="SqlActiveDirectoryAdministratorTimeouts" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_active_directory_administrator

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#create SqlActiveDirectoryAdministrator#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#delete SqlActiveDirectoryAdministrator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#read SqlActiveDirectoryAdministrator#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#update SqlActiveDirectoryAdministrator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#create SqlActiveDirectoryAdministrator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#delete SqlActiveDirectoryAdministrator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#read SqlActiveDirectoryAdministrator#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/sql_active_directory_administrator#update SqlActiveDirectoryAdministrator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlActiveDirectoryAdministratorTimeoutsOutputReference <a name="SqlActiveDirectoryAdministratorTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_active_directory_administrator

sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SqlActiveDirectoryAdministratorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sqlActiveDirectoryAdministrator.SqlActiveDirectoryAdministratorTimeouts">SqlActiveDirectoryAdministratorTimeouts</a>]

---



