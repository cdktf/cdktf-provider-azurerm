# `kustoDatabasePrincipalAssignment` Submodule <a name="`kustoDatabasePrincipalAssignment` Submodule" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoDatabasePrincipalAssignment <a name="KustoDatabasePrincipalAssignment" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment azurerm_kusto_database_principal_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_database_principal_assignment

kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  database_name: str,
  name: str,
  principal_id: str,
  principal_type: str,
  resource_group_name: str,
  role: str,
  tenant_id: str,
  id: str = None,
  timeouts: KustoDatabasePrincipalAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#cluster_name KustoDatabasePrincipalAssignment#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#database_name KustoDatabasePrincipalAssignment#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#name KustoDatabasePrincipalAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#principal_id KustoDatabasePrincipalAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#principal_type KustoDatabasePrincipalAssignment#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#resource_group_name KustoDatabasePrincipalAssignment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#role KustoDatabasePrincipalAssignment#role}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#tenant_id KustoDatabasePrincipalAssignment#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#id KustoDatabasePrincipalAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#cluster_name KustoDatabasePrincipalAssignment#cluster_name}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#database_name KustoDatabasePrincipalAssignment#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#name KustoDatabasePrincipalAssignment#name}.

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.principalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#principal_id KustoDatabasePrincipalAssignment#principal_id}.

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.principalType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#principal_type KustoDatabasePrincipalAssignment#principal_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#resource_group_name KustoDatabasePrincipalAssignment#resource_group_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#role KustoDatabasePrincipalAssignment#role}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#tenant_id KustoDatabasePrincipalAssignment#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#id KustoDatabasePrincipalAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#timeouts KustoDatabasePrincipalAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#create KustoDatabasePrincipalAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#delete KustoDatabasePrincipalAssignment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#read KustoDatabasePrincipalAssignment#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KustoDatabasePrincipalAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_database_principal_assignment

kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_database_principal_assignment

kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_database_principal_assignment

kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_database_principal_assignment

kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KustoDatabasePrincipalAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KustoDatabasePrincipalAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KustoDatabasePrincipalAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KustoDatabasePrincipalAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalName">principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantName">tenant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference">KustoDatabasePrincipalAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `principal_name`<sup>Required</sup> <a name="principal_name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalName"></a>

```python
principal_name: str
```

- *Type:* str

---

##### `tenant_name`<sup>Required</sup> <a name="tenant_name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantName"></a>

```python
tenant_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeouts"></a>

```python
timeouts: KustoDatabasePrincipalAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference">KustoDatabasePrincipalAssignmentTimeoutsOutputReference</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KustoDatabasePrincipalAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KustoDatabasePrincipalAssignmentConfig <a name="KustoDatabasePrincipalAssignmentConfig" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_database_principal_assignment

kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  database_name: str,
  name: str,
  principal_id: str,
  principal_type: str,
  resource_group_name: str,
  role: str,
  tenant_id: str,
  id: str = None,
  timeouts: KustoDatabasePrincipalAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#cluster_name KustoDatabasePrincipalAssignment#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#database_name KustoDatabasePrincipalAssignment#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#name KustoDatabasePrincipalAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#principal_id KustoDatabasePrincipalAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#principal_type KustoDatabasePrincipalAssignment#principal_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#resource_group_name KustoDatabasePrincipalAssignment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#role KustoDatabasePrincipalAssignment#role}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#tenant_id KustoDatabasePrincipalAssignment#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#id KustoDatabasePrincipalAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#cluster_name KustoDatabasePrincipalAssignment#cluster_name}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#database_name KustoDatabasePrincipalAssignment#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#name KustoDatabasePrincipalAssignment#name}.

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#principal_id KustoDatabasePrincipalAssignment#principal_id}.

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#principal_type KustoDatabasePrincipalAssignment#principal_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#resource_group_name KustoDatabasePrincipalAssignment#resource_group_name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#role KustoDatabasePrincipalAssignment#role}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#tenant_id KustoDatabasePrincipalAssignment#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#id KustoDatabasePrincipalAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentConfig.property.timeouts"></a>

```python
timeouts: KustoDatabasePrincipalAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#timeouts KustoDatabasePrincipalAssignment#timeouts}

---

### KustoDatabasePrincipalAssignmentTimeouts <a name="KustoDatabasePrincipalAssignmentTimeouts" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_database_principal_assignment

kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#create KustoDatabasePrincipalAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#delete KustoDatabasePrincipalAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#read KustoDatabasePrincipalAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#create KustoDatabasePrincipalAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#delete KustoDatabasePrincipalAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/kusto_database_principal_assignment#read KustoDatabasePrincipalAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoDatabasePrincipalAssignmentTimeoutsOutputReference <a name="KustoDatabasePrincipalAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_database_principal_assignment

kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KustoDatabasePrincipalAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoDatabasePrincipalAssignment.KustoDatabasePrincipalAssignmentTimeouts">KustoDatabasePrincipalAssignmentTimeouts</a>]

---



