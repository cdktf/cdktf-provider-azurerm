# `mssqlManagedInstanceFailoverGroup` Submodule <a name="`mssqlManagedInstanceFailoverGroup` Submodule" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlManagedInstanceFailoverGroup <a name="MssqlManagedInstanceFailoverGroup" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group azurerm_mssql_managed_instance_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup(
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
  managed_instance_id: str,
  name: str,
  partner_managed_instance_id: str,
  read_write_endpoint_failover_policy: MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy,
  id: str = None,
  readonly_endpoint_failover_policy_enabled: typing.Union[bool, IResolvable] = None,
  secondary_type: str = None,
  timeouts: MssqlManagedInstanceFailoverGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.partnerManagedInstanceId">partner_managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.readWriteEndpointFailoverPolicy">read_write_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.readonlyEndpointFailoverPolicyEnabled">readonly_endpoint_failover_policy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.secondaryType">secondary_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#secondary_type MssqlManagedInstanceFailoverGroup#secondary_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}.

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}.

---

##### `partner_managed_instance_id`<sup>Required</sup> <a name="partner_managed_instance_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.partnerManagedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}.

---

##### `read_write_endpoint_failover_policy`<sup>Required</sup> <a name="read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.readWriteEndpointFailoverPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#read_write_endpoint_failover_policy MssqlManagedInstanceFailoverGroup#read_write_endpoint_failover_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonly_endpoint_failover_policy_enabled`<sup>Optional</sup> <a name="readonly_endpoint_failover_policy_enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.readonlyEndpointFailoverPolicyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `secondary_type`<sup>Optional</sup> <a name="secondary_type" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.secondaryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#secondary_type MssqlManagedInstanceFailoverGroup#secondary_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#timeouts MssqlManagedInstanceFailoverGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy">put_read_write_endpoint_failover_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled">reset_readonly_endpoint_failover_policy_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetSecondaryType">reset_secondary_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_read_write_endpoint_failover_policy` <a name="put_read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy"></a>

```python
def put_read_write_endpoint_failover_policy(
  mode: str,
  grace_minutes: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#mode MssqlManagedInstanceFailoverGroup#mode}.

---

###### `grace_minutes`<sup>Optional</sup> <a name="grace_minutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.graceMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#grace_minutes MssqlManagedInstanceFailoverGroup#grace_minutes}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#create MssqlManagedInstanceFailoverGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#delete MssqlManagedInstanceFailoverGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#read MssqlManagedInstanceFailoverGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#update MssqlManagedInstanceFailoverGroup#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_readonly_endpoint_failover_policy_enabled` <a name="reset_readonly_endpoint_failover_policy_enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled"></a>

```python
def reset_readonly_endpoint_failover_policy_enabled() -> None
```

##### `reset_secondary_type` <a name="reset_secondary_type" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetSecondaryType"></a>

```python
def reset_secondary_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MssqlManagedInstanceFailoverGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MssqlManagedInstanceFailoverGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MssqlManagedInstanceFailoverGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MssqlManagedInstanceFailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlManagedInstanceFailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerRegion">partner_region</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList">MssqlManagedInstanceFailoverGroupPartnerRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy">read_write_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference">MssqlManagedInstanceFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput">partner_managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput">readonly_endpoint_failover_policy_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput">read_write_endpoint_failover_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.secondaryTypeInput">secondary_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId">partner_managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled">readonly_endpoint_failover_policy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.secondaryType">secondary_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `partner_region`<sup>Required</sup> <a name="partner_region" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerRegion"></a>

```python
partner_region: MssqlManagedInstanceFailoverGroupPartnerRegionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList">MssqlManagedInstanceFailoverGroupPartnerRegionList</a>

---

##### `read_write_endpoint_failover_policy`<sup>Required</sup> <a name="read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```python
read_write_endpoint_failover_policy: MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeouts"></a>

```python
timeouts: MssqlManagedInstanceFailoverGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference">MssqlManagedInstanceFailoverGroupTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partner_managed_instance_id_input`<sup>Optional</sup> <a name="partner_managed_instance_id_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceIdInput"></a>

```python
partner_managed_instance_id_input: str
```

- *Type:* str

---

##### `readonly_endpoint_failover_policy_enabled_input`<sup>Optional</sup> <a name="readonly_endpoint_failover_policy_enabled_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput"></a>

```python
readonly_endpoint_failover_policy_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_write_endpoint_failover_policy_input`<sup>Optional</sup> <a name="read_write_endpoint_failover_policy_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readWriteEndpointFailoverPolicyInput"></a>

```python
read_write_endpoint_failover_policy_input: MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `secondary_type_input`<sup>Optional</sup> <a name="secondary_type_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.secondaryTypeInput"></a>

```python
secondary_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MssqlManagedInstanceFailoverGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partner_managed_instance_id`<sup>Required</sup> <a name="partner_managed_instance_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.partnerManagedInstanceId"></a>

```python
partner_managed_instance_id: str
```

- *Type:* str

---

##### `readonly_endpoint_failover_policy_enabled`<sup>Required</sup> <a name="readonly_endpoint_failover_policy_enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled"></a>

```python
readonly_endpoint_failover_policy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secondary_type`<sup>Required</sup> <a name="secondary_type" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.secondaryType"></a>

```python
secondary_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlManagedInstanceFailoverGroupConfig <a name="MssqlManagedInstanceFailoverGroupConfig" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  managed_instance_id: str,
  name: str,
  partner_managed_instance_id: str,
  read_write_endpoint_failover_policy: MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy,
  id: str = None,
  readonly_endpoint_failover_policy_enabled: typing.Union[bool, IResolvable] = None,
  secondary_type: str = None,
  timeouts: MssqlManagedInstanceFailoverGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId">partner_managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy">read_write_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled">readonly_endpoint_failover_policy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.secondaryType">secondary_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#secondary_type MssqlManagedInstanceFailoverGroup#secondary_type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#location MssqlManagedInstanceFailoverGroup#location}.

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#managed_instance_id MssqlManagedInstanceFailoverGroup#managed_instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#name MssqlManagedInstanceFailoverGroup#name}.

---

##### `partner_managed_instance_id`<sup>Required</sup> <a name="partner_managed_instance_id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.partnerManagedInstanceId"></a>

```python
partner_managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#partner_managed_instance_id MssqlManagedInstanceFailoverGroup#partner_managed_instance_id}.

---

##### `read_write_endpoint_failover_policy`<sup>Required</sup> <a name="read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readWriteEndpointFailoverPolicy"></a>

```python
read_write_endpoint_failover_policy: MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#read_write_endpoint_failover_policy MssqlManagedInstanceFailoverGroup#read_write_endpoint_failover_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#id MssqlManagedInstanceFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonly_endpoint_failover_policy_enabled`<sup>Optional</sup> <a name="readonly_endpoint_failover_policy_enabled" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled"></a>

```python
readonly_endpoint_failover_policy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#readonly_endpoint_failover_policy_enabled MssqlManagedInstanceFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `secondary_type`<sup>Optional</sup> <a name="secondary_type" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.secondaryType"></a>

```python
secondary_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#secondary_type MssqlManagedInstanceFailoverGroup#secondary_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupConfig.property.timeouts"></a>

```python
timeouts: MssqlManagedInstanceFailoverGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#timeouts MssqlManagedInstanceFailoverGroup#timeouts}

---

### MssqlManagedInstanceFailoverGroupPartnerRegion <a name="MssqlManagedInstanceFailoverGroupPartnerRegion" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion()
```


### MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy <a name="MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy(
  mode: str,
  grace_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#mode MssqlManagedInstanceFailoverGroup#mode}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes">grace_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#grace_minutes MssqlManagedInstanceFailoverGroup#grace_minutes}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#mode MssqlManagedInstanceFailoverGroup#mode}.

---

##### `grace_minutes`<sup>Optional</sup> <a name="grace_minutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes"></a>

```python
grace_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#grace_minutes MssqlManagedInstanceFailoverGroup#grace_minutes}.

---

### MssqlManagedInstanceFailoverGroupTimeouts <a name="MssqlManagedInstanceFailoverGroupTimeouts" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#create MssqlManagedInstanceFailoverGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#delete MssqlManagedInstanceFailoverGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#read MssqlManagedInstanceFailoverGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#update MssqlManagedInstanceFailoverGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#create MssqlManagedInstanceFailoverGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#delete MssqlManagedInstanceFailoverGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#read MssqlManagedInstanceFailoverGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/mssql_managed_instance_failover_group#update MssqlManagedInstanceFailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlManagedInstanceFailoverGroupPartnerRegionList <a name="MssqlManagedInstanceFailoverGroupPartnerRegionList" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference <a name="MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion">MssqlManagedInstanceFailoverGroupPartnerRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegionOutputReference.property.internalValue"></a>

```python
internal_value: MssqlManagedInstanceFailoverGroupPartnerRegion
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupPartnerRegion">MssqlManagedInstanceFailoverGroupPartnerRegion</a>

---


### MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes">reset_grace_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grace_minutes` <a name="reset_grace_minutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes"></a>

```python
def reset_grace_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput">grace_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">grace_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grace_minutes_input`<sup>Optional</sup> <a name="grace_minutes_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput"></a>

```python
grace_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `grace_minutes`<sup>Required</sup> <a name="grace_minutes" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```python
grace_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy">MssqlManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### MssqlManagedInstanceFailoverGroupTimeoutsOutputReference <a name="MssqlManagedInstanceFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_managed_instance_failover_group

mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MssqlManagedInstanceFailoverGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlManagedInstanceFailoverGroup.MssqlManagedInstanceFailoverGroupTimeouts">MssqlManagedInstanceFailoverGroupTimeouts</a>]

---



