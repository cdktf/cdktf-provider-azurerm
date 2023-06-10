# `azurerm_sql_failover_group`

Refer to the Terraform Registory for docs: [`azurerm_sql_failover_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group).

# `sqlFailoverGroup` Submodule <a name="`sqlFailoverGroup` Submodule" id="@cdktf/provider-azurerm.sqlFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlFailoverGroup <a name="SqlFailoverGroup" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group azurerm_sql_failover_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroup(
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
  partner_servers: typing.Union[IResolvable, typing.List[SqlFailoverGroupPartnerServers]],
  read_write_endpoint_failover_policy: SqlFailoverGroupReadWriteEndpointFailoverPolicy,
  resource_group_name: str,
  server_name: str,
  databases: typing.List[str] = None,
  id: str = None,
  readonly_endpoint_failover_policy: SqlFailoverGroupReadonlyEndpointFailoverPolicy = None,
  tags: typing.Mapping[str] = None,
  timeouts: SqlFailoverGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#name SqlFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.partnerServers">partner_servers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>]]</code> | partner_servers block. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.readWriteEndpointFailoverPolicy">read_write_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#resource_group_name SqlFailoverGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#server_name SqlFailoverGroup#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.databases">databases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#databases SqlFailoverGroup#databases}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#id SqlFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.readonlyEndpointFailoverPolicy">readonly_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a></code> | readonly_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#tags SqlFailoverGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#name SqlFailoverGroup#name}.

---

##### `partner_servers`<sup>Required</sup> <a name="partner_servers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.partnerServers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>]]

partner_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#partner_servers SqlFailoverGroup#partner_servers}

---

##### `read_write_endpoint_failover_policy`<sup>Required</sup> <a name="read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.readWriteEndpointFailoverPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#read_write_endpoint_failover_policy SqlFailoverGroup#read_write_endpoint_failover_policy}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#resource_group_name SqlFailoverGroup#resource_group_name}.

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#server_name SqlFailoverGroup#server_name}.

---

##### `databases`<sup>Optional</sup> <a name="databases" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.databases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#databases SqlFailoverGroup#databases}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#id SqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonly_endpoint_failover_policy`<sup>Optional</sup> <a name="readonly_endpoint_failover_policy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.readonlyEndpointFailoverPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a>

readonly_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#readonly_endpoint_failover_policy SqlFailoverGroup#readonly_endpoint_failover_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#tags SqlFailoverGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#timeouts SqlFailoverGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putPartnerServers">put_partner_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadonlyEndpointFailoverPolicy">put_readonly_endpoint_failover_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadWriteEndpointFailoverPolicy">put_read_write_endpoint_failover_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetDatabases">reset_databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetReadonlyEndpointFailoverPolicy">reset_readonly_endpoint_failover_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_partner_servers` <a name="put_partner_servers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putPartnerServers"></a>

```python
def put_partner_servers(
  value: typing.Union[IResolvable, typing.List[SqlFailoverGroupPartnerServers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putPartnerServers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>]]

---

##### `put_readonly_endpoint_failover_policy` <a name="put_readonly_endpoint_failover_policy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadonlyEndpointFailoverPolicy"></a>

```python
def put_readonly_endpoint_failover_policy(
  mode: str
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadonlyEndpointFailoverPolicy.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#mode SqlFailoverGroup#mode}.

---

##### `put_read_write_endpoint_failover_policy` <a name="put_read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadWriteEndpointFailoverPolicy"></a>

```python
def put_read_write_endpoint_failover_policy(
  mode: str,
  grace_minutes: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#mode SqlFailoverGroup#mode}.

---

###### `grace_minutes`<sup>Optional</sup> <a name="grace_minutes" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putReadWriteEndpointFailoverPolicy.parameter.graceMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#grace_minutes SqlFailoverGroup#grace_minutes}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#create SqlFailoverGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#delete SqlFailoverGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#read SqlFailoverGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#update SqlFailoverGroup#update}.

---

##### `reset_databases` <a name="reset_databases" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetDatabases"></a>

```python
def reset_databases() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_readonly_endpoint_failover_policy` <a name="reset_readonly_endpoint_failover_policy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetReadonlyEndpointFailoverPolicy"></a>

```python
def reset_readonly_endpoint_failover_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.partnerServers">partner_servers</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList">SqlFailoverGroupPartnerServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readonlyEndpointFailoverPolicy">readonly_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference">SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readWriteEndpointFailoverPolicy">read_write_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference">SqlFailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.databasesInput">databases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.partnerServersInput">partner_servers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readonlyEndpointFailoverPolicyInput">readonly_endpoint_failover_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readWriteEndpointFailoverPolicyInput">read_write_endpoint_failover_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.databases">databases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `partner_servers`<sup>Required</sup> <a name="partner_servers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.partnerServers"></a>

```python
partner_servers: SqlFailoverGroupPartnerServersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList">SqlFailoverGroupPartnerServersList</a>

---

##### `readonly_endpoint_failover_policy`<sup>Required</sup> <a name="readonly_endpoint_failover_policy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readonlyEndpointFailoverPolicy"></a>

```python
readonly_endpoint_failover_policy: SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference">SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference</a>

---

##### `read_write_endpoint_failover_policy`<sup>Required</sup> <a name="read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readWriteEndpointFailoverPolicy"></a>

```python
read_write_endpoint_failover_policy: SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference">SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.timeouts"></a>

```python
timeouts: SqlFailoverGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference">SqlFailoverGroupTimeoutsOutputReference</a>

---

##### `databases_input`<sup>Optional</sup> <a name="databases_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.databasesInput"></a>

```python
databases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partner_servers_input`<sup>Optional</sup> <a name="partner_servers_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.partnerServersInput"></a>

```python
partner_servers_input: typing.Union[IResolvable, typing.List[SqlFailoverGroupPartnerServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>]]

---

##### `readonly_endpoint_failover_policy_input`<sup>Optional</sup> <a name="readonly_endpoint_failover_policy_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readonlyEndpointFailoverPolicyInput"></a>

```python
readonly_endpoint_failover_policy_input: SqlFailoverGroupReadonlyEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a>

---

##### `read_write_endpoint_failover_policy_input`<sup>Optional</sup> <a name="read_write_endpoint_failover_policy_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.readWriteEndpointFailoverPolicyInput"></a>

```python
read_write_endpoint_failover_policy_input: SqlFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SqlFailoverGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a>, cdktf.IResolvable]

---

##### `databases`<sup>Required</sup> <a name="databases" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.databases"></a>

```python
databases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SqlFailoverGroupConfig <a name="SqlFailoverGroupConfig" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  partner_servers: typing.Union[IResolvable, typing.List[SqlFailoverGroupPartnerServers]],
  read_write_endpoint_failover_policy: SqlFailoverGroupReadWriteEndpointFailoverPolicy,
  resource_group_name: str,
  server_name: str,
  databases: typing.List[str] = None,
  id: str = None,
  readonly_endpoint_failover_policy: SqlFailoverGroupReadonlyEndpointFailoverPolicy = None,
  tags: typing.Mapping[str] = None,
  timeouts: SqlFailoverGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#name SqlFailoverGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.partnerServers">partner_servers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>]]</code> | partner_servers block. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.readWriteEndpointFailoverPolicy">read_write_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | read_write_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#resource_group_name SqlFailoverGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#server_name SqlFailoverGroup#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.databases">databases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#databases SqlFailoverGroup#databases}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#id SqlFailoverGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.readonlyEndpointFailoverPolicy">readonly_endpoint_failover_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a></code> | readonly_endpoint_failover_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#tags SqlFailoverGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#name SqlFailoverGroup#name}.

---

##### `partner_servers`<sup>Required</sup> <a name="partner_servers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.partnerServers"></a>

```python
partner_servers: typing.Union[IResolvable, typing.List[SqlFailoverGroupPartnerServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>]]

partner_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#partner_servers SqlFailoverGroup#partner_servers}

---

##### `read_write_endpoint_failover_policy`<sup>Required</sup> <a name="read_write_endpoint_failover_policy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.readWriteEndpointFailoverPolicy"></a>

```python
read_write_endpoint_failover_policy: SqlFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

read_write_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#read_write_endpoint_failover_policy SqlFailoverGroup#read_write_endpoint_failover_policy}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#resource_group_name SqlFailoverGroup#resource_group_name}.

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#server_name SqlFailoverGroup#server_name}.

---

##### `databases`<sup>Optional</sup> <a name="databases" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.databases"></a>

```python
databases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#databases SqlFailoverGroup#databases}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#id SqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readonly_endpoint_failover_policy`<sup>Optional</sup> <a name="readonly_endpoint_failover_policy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.readonlyEndpointFailoverPolicy"></a>

```python
readonly_endpoint_failover_policy: SqlFailoverGroupReadonlyEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a>

readonly_endpoint_failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#readonly_endpoint_failover_policy SqlFailoverGroup#readonly_endpoint_failover_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#tags SqlFailoverGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupConfig.property.timeouts"></a>

```python
timeouts: SqlFailoverGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#timeouts SqlFailoverGroup#timeouts}

---

### SqlFailoverGroupPartnerServers <a name="SqlFailoverGroupPartnerServers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroupPartnerServers(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#id SqlFailoverGroup#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#id SqlFailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SqlFailoverGroupReadonlyEndpointFailoverPolicy <a name="SqlFailoverGroupReadonlyEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy(
  mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#mode SqlFailoverGroup#mode}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#mode SqlFailoverGroup#mode}.

---

### SqlFailoverGroupReadWriteEndpointFailoverPolicy <a name="SqlFailoverGroupReadWriteEndpointFailoverPolicy" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy(
  mode: str,
  grace_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#mode SqlFailoverGroup#mode}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes">grace_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#grace_minutes SqlFailoverGroup#grace_minutes}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#mode SqlFailoverGroup#mode}.

---

##### `grace_minutes`<sup>Optional</sup> <a name="grace_minutes" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy.property.graceMinutes"></a>

```python
grace_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#grace_minutes SqlFailoverGroup#grace_minutes}.

---

### SqlFailoverGroupTimeouts <a name="SqlFailoverGroupTimeouts" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#create SqlFailoverGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#delete SqlFailoverGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#read SqlFailoverGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#update SqlFailoverGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#create SqlFailoverGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#delete SqlFailoverGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#read SqlFailoverGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/sql_failover_group#update SqlFailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlFailoverGroupPartnerServersList <a name="SqlFailoverGroupPartnerServersList" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroupPartnerServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SqlFailoverGroupPartnerServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SqlFailoverGroupPartnerServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>]]

---


### SqlFailoverGroupPartnerServersOutputReference <a name="SqlFailoverGroupPartnerServersOutputReference" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SqlFailoverGroupPartnerServers, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupPartnerServers">SqlFailoverGroupPartnerServers</a>, cdktf.IResolvable]

---


### SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference <a name="SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```python
internal_value: SqlFailoverGroupReadonlyEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadonlyEndpointFailoverPolicy">SqlFailoverGroupReadonlyEndpointFailoverPolicy</a>

---


### SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference <a name="SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes">reset_grace_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grace_minutes` <a name="reset_grace_minutes" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.resetGraceMinutes"></a>

```python
def reset_grace_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput">grace_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes">grace_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grace_minutes_input`<sup>Optional</sup> <a name="grace_minutes_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutesInput"></a>

```python
grace_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `grace_minutes`<sup>Required</sup> <a name="grace_minutes" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.graceMinutes"></a>

```python
grace_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicyOutputReference.property.internalValue"></a>

```python
internal_value: SqlFailoverGroupReadWriteEndpointFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupReadWriteEndpointFailoverPolicy">SqlFailoverGroupReadWriteEndpointFailoverPolicy</a>

---


### SqlFailoverGroupTimeoutsOutputReference <a name="SqlFailoverGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sql_failover_group

sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SqlFailoverGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sqlFailoverGroup.SqlFailoverGroupTimeouts">SqlFailoverGroupTimeouts</a>, cdktf.IResolvable]

---



