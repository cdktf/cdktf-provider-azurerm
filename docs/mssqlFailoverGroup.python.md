# `mssqlFailoverGroup` Submodule <a name="`mssqlFailoverGroup` Submodule" id="@cdktf/provider-azurerm.mssqlFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlFailoverGroup <a name="MssqlFailoverGroup" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group azurerm_mssql_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroup(
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
  partner_server: typing.Union[IResolvable, typing.List[MssqlFailoverGroupPartnerServer]],
  read_write_endpoint_failover_policy: MssqlFailoverGroupReadWriteEndpointFailoverPolicy,
  server_id: str,
  databases: typing.List[str] = None,
  id: str = None,
  readonly_endpoint_failover_policy_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MssqlFailoverGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#name MssqlFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.partnerServer">partner_server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer">MssqlFailoverGroupPartnerServer</a>]]</code> | partner_server block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.readWriteEndpointFailoverPolicy">read_write_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#server_id MssqlFailoverGroup#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.databases">databases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#databases MssqlFailoverGroup#databases}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.readonlyEndpointFailoverPolicyEnabled">readonly_endpoint_failover_policy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#readonly_endpoint_failover_policy_enabled MssqlFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#tags MssqlFailoverGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts">MssqlFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#name MssqlFailoverGroup#name}.

---

##### `partner_server`<sup>Required</sup> <a name="partner_server" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.partnerServer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer">MssqlFailoverGroupPartnerServer</a>]]

partner_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#partner_server MssqlFailoverGroup#partner_server}

---

##### `read_write_endpoint_failover_policy`<sup>Required</sup> <a name="read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.readWriteEndpointFailoverPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#read_write_endpoint_failover_policy MssqlFailoverGroup#read_write_endpoint_failover_policy}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.serverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#server_id MssqlFailoverGroup#server_id}.

---

##### `databases`<sup>Optional</sup> <a name="databases" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.databases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#databases MssqlFailoverGroup#databases}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonly_endpoint_failover_policy_enabled`<sup>Optional</sup> <a name="readonly_endpoint_failover_policy_enabled" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.readonlyEndpointFailoverPolicyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#readonly_endpoint_failover_policy_enabled MssqlFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#tags MssqlFailoverGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts">MssqlFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#timeouts MssqlFailoverGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putPartnerServer">put_partner_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putReadWriteEndpointFailoverPolicy">put_read_write_endpoint_failover_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetDatabases">reset_databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled">reset_readonly_endpoint_failover_policy_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_partner_server` <a name="put_partner_server" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putPartnerServer"></a>

```python
def put_partner_server(
  value: typing.Union[IResolvable, typing.List[MssqlFailoverGroupPartnerServer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putPartnerServer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer">MssqlFailoverGroupPartnerServer</a>]]

---

##### `put_read_write_endpoint_failover_policy` <a name="put_read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putReadWriteEndpointFailoverPolicy"></a>

```python
def put_read_write_endpoint_failover_policy(
  mode: str,
  grace_minutes: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#mode MssqlFailoverGroup#mode}.

---

###### `grace_minutes`<sup>Optional</sup> <a name="grace_minutes" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.graceMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#grace_minutes MssqlFailoverGroup#grace_minutes}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#create MssqlFailoverGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#delete MssqlFailoverGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#read MssqlFailoverGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#update MssqlFailoverGroup#update}.

---

##### `reset_databases` <a name="reset_databases" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetDatabases"></a>

```python
def reset_databases() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_readonly_endpoint_failover_policy_enabled` <a name="reset_readonly_endpoint_failover_policy_enabled" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetReadonlyEndpointFailoverPolicyEnabled"></a>

```python
def reset_readonly_endpoint_failover_policy_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MssqlFailoverGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MssqlFailoverGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MssqlFailoverGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MssqlFailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlFailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.partnerServer">partner_server</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList">MssqlFailoverGroupPartnerServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readWriteEndpointFailoverPolicy">read_write_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference">MssqlFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.databasesInput">databases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.partnerServerInput">partner_server_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer">MssqlFailoverGroupPartnerServer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput">readonly_endpoint_failover_policy_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readWriteEndpointFailoverPolicyInput">read_write_endpoint_failover_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.serverIdInput">server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts">MssqlFailoverGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.databases">databases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled">readonly_endpoint_failover_policy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.serverId">server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `partner_server`<sup>Required</sup> <a name="partner_server" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.partnerServer"></a>

```python
partner_server: MssqlFailoverGroupPartnerServerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList">MssqlFailoverGroupPartnerServerList</a>

---

##### `read_write_endpoint_failover_policy`<sup>Required</sup> <a name="read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```python
read_write_endpoint_failover_policy: MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.timeouts"></a>

```python
timeouts: MssqlFailoverGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference">MssqlFailoverGroupTimeoutsOutputReference</a>

---

##### `databases_input`<sup>Optional</sup> <a name="databases_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.databasesInput"></a>

```python
databases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partner_server_input`<sup>Optional</sup> <a name="partner_server_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.partnerServerInput"></a>

```python
partner_server_input: typing.Union[IResolvable, typing.List[MssqlFailoverGroupPartnerServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer">MssqlFailoverGroupPartnerServer</a>]]

---

##### `readonly_endpoint_failover_policy_enabled_input`<sup>Optional</sup> <a name="readonly_endpoint_failover_policy_enabled_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabledInput"></a>

```python
readonly_endpoint_failover_policy_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_write_endpoint_failover_policy_input`<sup>Optional</sup> <a name="read_write_endpoint_failover_policy_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readWriteEndpointFailoverPolicyInput"></a>

```python
read_write_endpoint_failover_policy_input: MssqlFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `server_id_input`<sup>Optional</sup> <a name="server_id_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.serverIdInput"></a>

```python
server_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MssqlFailoverGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts">MssqlFailoverGroupTimeouts</a>]

---

##### `databases`<sup>Required</sup> <a name="databases" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.databases"></a>

```python
databases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `readonly_endpoint_failover_policy_enabled`<sup>Required</sup> <a name="readonly_endpoint_failover_policy_enabled" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.readonlyEndpointFailoverPolicyEnabled"></a>

```python
readonly_endpoint_failover_policy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlFailoverGroupConfig <a name="MssqlFailoverGroupConfig" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  partner_server: typing.Union[IResolvable, typing.List[MssqlFailoverGroupPartnerServer]],
  read_write_endpoint_failover_policy: MssqlFailoverGroupReadWriteEndpointFailoverPolicy,
  server_id: str,
  databases: typing.List[str] = None,
  id: str = None,
  readonly_endpoint_failover_policy_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MssqlFailoverGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#name MssqlFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.partnerServer">partner_server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer">MssqlFailoverGroupPartnerServer</a>]]</code> | partner_server block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.readWriteEndpointFailoverPolicy">read_write_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.serverId">server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#server_id MssqlFailoverGroup#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.databases">databases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#databases MssqlFailoverGroup#databases}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled">readonly_endpoint_failover_policy_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#readonly_endpoint_failover_policy_enabled MssqlFailoverGroup#readonly_endpoint_failover_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#tags MssqlFailoverGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts">MssqlFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#name MssqlFailoverGroup#name}.

---

##### `partner_server`<sup>Required</sup> <a name="partner_server" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.partnerServer"></a>

```python
partner_server: typing.Union[IResolvable, typing.List[MssqlFailoverGroupPartnerServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer">MssqlFailoverGroupPartnerServer</a>]]

partner_server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#partner_server MssqlFailoverGroup#partner_server}

---

##### `read_write_endpoint_failover_policy`<sup>Required</sup> <a name="read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.readWriteEndpointFailoverPolicy"></a>

```python
read_write_endpoint_failover_policy: MssqlFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#read_write_endpoint_failover_policy MssqlFailoverGroup#read_write_endpoint_failover_policy}

---

##### `server_id`<sup>Required</sup> <a name="server_id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.serverId"></a>

```python
server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#server_id MssqlFailoverGroup#server_id}.

---

##### `databases`<sup>Optional</sup> <a name="databases" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.databases"></a>

```python
databases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#databases MssqlFailoverGroup#databases}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonly_endpoint_failover_policy_enabled`<sup>Optional</sup> <a name="readonly_endpoint_failover_policy_enabled" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.readonlyEndpointFailoverPolicyEnabled"></a>

```python
readonly_endpoint_failover_policy_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#readonly_endpoint_failover_policy_enabled MssqlFailoverGroup#readonly_endpoint_failover_policy_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#tags MssqlFailoverGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupConfig.property.timeouts"></a>

```python
timeouts: MssqlFailoverGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts">MssqlFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#timeouts MssqlFailoverGroup#timeouts}

---

### MssqlFailoverGroupPartnerServer <a name="MssqlFailoverGroupPartnerServer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroupPartnerServer(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#id MssqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MssqlFailoverGroupReadWriteEndpointFailoverPolicy <a name="MssqlFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy(
  mode: str,
  grace_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#mode MssqlFailoverGroup#mode}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes">grace_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#grace_minutes MssqlFailoverGroup#grace_minutes}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#mode MssqlFailoverGroup#mode}.

---

##### `grace_minutes`<sup>Optional</sup> <a name="grace_minutes" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes"></a>

```python
grace_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#grace_minutes MssqlFailoverGroup#grace_minutes}.

---

### MssqlFailoverGroupTimeouts <a name="MssqlFailoverGroupTimeouts" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#create MssqlFailoverGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#delete MssqlFailoverGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#read MssqlFailoverGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#update MssqlFailoverGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#create MssqlFailoverGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#delete MssqlFailoverGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#read MssqlFailoverGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mssql_failover_group#update MssqlFailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlFailoverGroupPartnerServerList <a name="MssqlFailoverGroupPartnerServerList" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MssqlFailoverGroupPartnerServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer">MssqlFailoverGroupPartnerServer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MssqlFailoverGroupPartnerServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer">MssqlFailoverGroupPartnerServer</a>]]

---


### MssqlFailoverGroupPartnerServerOutputReference <a name="MssqlFailoverGroupPartnerServerOutputReference" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer">MssqlFailoverGroupPartnerServer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MssqlFailoverGroupPartnerServer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupPartnerServer">MssqlFailoverGroupPartnerServer</a>]

---


### MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes">reset_grace_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grace_minutes` <a name="reset_grace_minutes" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes"></a>

```python
def reset_grace_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput">grace_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">grace_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grace_minutes_input`<sup>Optional</sup> <a name="grace_minutes_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput"></a>

```python
grace_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `grace_minutes`<sup>Required</sup> <a name="grace_minutes" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```python
grace_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MssqlFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupReadWriteEndpointFailoverPolicy">MssqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### MssqlFailoverGroupTimeoutsOutputReference <a name="MssqlFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_failover_group

mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts">MssqlFailoverGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MssqlFailoverGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlFailoverGroup.MssqlFailoverGroupTimeouts">MssqlFailoverGroupTimeouts</a>]

---



