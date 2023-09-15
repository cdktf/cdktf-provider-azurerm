# `azurerm_cosmosdb_postgresql_firewall_rule`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_postgresql_firewall_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule).

# `cosmosdbPostgresqlFirewallRule` Submodule <a name="`cosmosdbPostgresqlFirewallRule` Submodule" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbPostgresqlFirewallRule <a name="CosmosdbPostgresqlFirewallRule" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule azurerm_cosmosdb_postgresql_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_firewall_rule

cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  end_ip_address: str,
  name: str,
  start_ip_address: str,
  id: str = None,
  timeouts: CosmosdbPostgresqlFirewallRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#cluster_id CosmosdbPostgresqlFirewallRule#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.endIpAddress">end_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#end_ip_address CosmosdbPostgresqlFirewallRule#end_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#name CosmosdbPostgresqlFirewallRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.startIpAddress">start_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#start_ip_address CosmosdbPostgresqlFirewallRule#start_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#id CosmosdbPostgresqlFirewallRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#cluster_id CosmosdbPostgresqlFirewallRule#cluster_id}.

---

##### `end_ip_address`<sup>Required</sup> <a name="end_ip_address" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.endIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#end_ip_address CosmosdbPostgresqlFirewallRule#end_ip_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#name CosmosdbPostgresqlFirewallRule#name}.

---

##### `start_ip_address`<sup>Required</sup> <a name="start_ip_address" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.startIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#start_ip_address CosmosdbPostgresqlFirewallRule#start_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#id CosmosdbPostgresqlFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#timeouts CosmosdbPostgresqlFirewallRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#create CosmosdbPostgresqlFirewallRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#delete CosmosdbPostgresqlFirewallRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#read CosmosdbPostgresqlFirewallRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#update CosmosdbPostgresqlFirewallRule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_firewall_rule

cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_firewall_rule

cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_firewall_rule

cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference">CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddressInput">end_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddressInput">start_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddress">end_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddress">start_ip_address</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeouts"></a>

```python
timeouts: CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference">CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `end_ip_address_input`<sup>Optional</sup> <a name="end_ip_address_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddressInput"></a>

```python
end_ip_address_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `start_ip_address_input`<sup>Optional</sup> <a name="start_ip_address_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddressInput"></a>

```python
start_ip_address_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CosmosdbPostgresqlFirewallRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a>]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `end_ip_address`<sup>Required</sup> <a name="end_ip_address" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddress"></a>

```python
end_ip_address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_ip_address`<sup>Required</sup> <a name="start_ip_address" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddress"></a>

```python
start_ip_address: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbPostgresqlFirewallRuleConfig <a name="CosmosdbPostgresqlFirewallRuleConfig" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_firewall_rule

cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  end_ip_address: str,
  name: str,
  start_ip_address: str,
  id: str = None,
  timeouts: CosmosdbPostgresqlFirewallRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#cluster_id CosmosdbPostgresqlFirewallRule#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.endIpAddress">end_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#end_ip_address CosmosdbPostgresqlFirewallRule#end_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#name CosmosdbPostgresqlFirewallRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.startIpAddress">start_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#start_ip_address CosmosdbPostgresqlFirewallRule#start_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#id CosmosdbPostgresqlFirewallRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#cluster_id CosmosdbPostgresqlFirewallRule#cluster_id}.

---

##### `end_ip_address`<sup>Required</sup> <a name="end_ip_address" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.endIpAddress"></a>

```python
end_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#end_ip_address CosmosdbPostgresqlFirewallRule#end_ip_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#name CosmosdbPostgresqlFirewallRule#name}.

---

##### `start_ip_address`<sup>Required</sup> <a name="start_ip_address" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.startIpAddress"></a>

```python
start_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#start_ip_address CosmosdbPostgresqlFirewallRule#start_ip_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#id CosmosdbPostgresqlFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.timeouts"></a>

```python
timeouts: CosmosdbPostgresqlFirewallRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#timeouts CosmosdbPostgresqlFirewallRule#timeouts}

---

### CosmosdbPostgresqlFirewallRuleTimeouts <a name="CosmosdbPostgresqlFirewallRuleTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_firewall_rule

cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#create CosmosdbPostgresqlFirewallRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#delete CosmosdbPostgresqlFirewallRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#read CosmosdbPostgresqlFirewallRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#update CosmosdbPostgresqlFirewallRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#create CosmosdbPostgresqlFirewallRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#delete CosmosdbPostgresqlFirewallRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#read CosmosdbPostgresqlFirewallRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/cosmosdb_postgresql_firewall_rule#update CosmosdbPostgresqlFirewallRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference <a name="CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_firewall_rule

cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbPostgresqlFirewallRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a>]

---



