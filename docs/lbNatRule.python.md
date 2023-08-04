# `azurerm_lb_nat_rule`

Refer to the Terraform Registory for docs: [`azurerm_lb_nat_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule).

# `lbNatRule` Submodule <a name="`lbNatRule` Submodule" id="@cdktf/provider-azurerm.lbNatRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbNatRule <a name="LbNatRule" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule azurerm_lb_nat_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_nat_rule

lbNatRule.LbNatRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_port: typing.Union[int, float],
  frontend_ip_configuration_name: str,
  loadbalancer_id: str,
  name: str,
  protocol: str,
  resource_group_name: str,
  backend_address_pool_id: str = None,
  enable_floating_ip: typing.Union[bool, IResolvable] = None,
  enable_tcp_reset: typing.Union[bool, IResolvable] = None,
  frontend_port: typing.Union[int, float] = None,
  frontend_port_end: typing.Union[int, float] = None,
  frontend_port_start: typing.Union[int, float] = None,
  id: str = None,
  idle_timeout_in_minutes: typing.Union[int, float] = None,
  timeouts: LbNatRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#backend_port LbNatRule#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.frontendIpConfigurationName">frontend_ip_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_ip_configuration_name LbNatRule#frontend_ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#loadbalancer_id LbNatRule#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#name LbNatRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#protocol LbNatRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#resource_group_name LbNatRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#backend_address_pool_id LbNatRule#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.enableFloatingIp">enable_floating_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#enable_floating_ip LbNatRule#enable_floating_ip}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.enableTcpReset">enable_tcp_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#enable_tcp_reset LbNatRule#enable_tcp_reset}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.frontendPort">frontend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port LbNatRule#frontend_port}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.frontendPortEnd">frontend_port_end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port_end LbNatRule#frontend_port_end}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.frontendPortStart">frontend_port_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port_start LbNatRule#frontend_port_start}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#id LbNatRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#idle_timeout_in_minutes LbNatRule#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.backendPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#backend_port LbNatRule#backend_port}.

---

##### `frontend_ip_configuration_name`<sup>Required</sup> <a name="frontend_ip_configuration_name" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.frontendIpConfigurationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_ip_configuration_name LbNatRule#frontend_ip_configuration_name}.

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.loadbalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#loadbalancer_id LbNatRule#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#name LbNatRule#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#protocol LbNatRule#protocol}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#resource_group_name LbNatRule#resource_group_name}.

---

##### `backend_address_pool_id`<sup>Optional</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.backendAddressPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#backend_address_pool_id LbNatRule#backend_address_pool_id}.

---

##### `enable_floating_ip`<sup>Optional</sup> <a name="enable_floating_ip" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.enableFloatingIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#enable_floating_ip LbNatRule#enable_floating_ip}.

---

##### `enable_tcp_reset`<sup>Optional</sup> <a name="enable_tcp_reset" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.enableTcpReset"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#enable_tcp_reset LbNatRule#enable_tcp_reset}.

---

##### `frontend_port`<sup>Optional</sup> <a name="frontend_port" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.frontendPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port LbNatRule#frontend_port}.

---

##### `frontend_port_end`<sup>Optional</sup> <a name="frontend_port_end" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.frontendPortEnd"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port_end LbNatRule#frontend_port_end}.

---

##### `frontend_port_start`<sup>Optional</sup> <a name="frontend_port_start" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.frontendPortStart"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port_start LbNatRule#frontend_port_start}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#id LbNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout_in_minutes`<sup>Optional</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.idleTimeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#idle_timeout_in_minutes LbNatRule#idle_timeout_in_minutes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#timeouts LbNatRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetBackendAddressPoolId">reset_backend_address_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetEnableFloatingIp">reset_enable_floating_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetEnableTcpReset">reset_enable_tcp_reset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetFrontendPort">reset_frontend_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetFrontendPortEnd">reset_frontend_port_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetFrontendPortStart">reset_frontend_port_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetIdleTimeoutInMinutes">reset_idle_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#create LbNatRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#delete LbNatRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#read LbNatRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#update LbNatRule#update}.

---

##### `reset_backend_address_pool_id` <a name="reset_backend_address_pool_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetBackendAddressPoolId"></a>

```python
def reset_backend_address_pool_id() -> None
```

##### `reset_enable_floating_ip` <a name="reset_enable_floating_ip" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetEnableFloatingIp"></a>

```python
def reset_enable_floating_ip() -> None
```

##### `reset_enable_tcp_reset` <a name="reset_enable_tcp_reset" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetEnableTcpReset"></a>

```python
def reset_enable_tcp_reset() -> None
```

##### `reset_frontend_port` <a name="reset_frontend_port" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetFrontendPort"></a>

```python
def reset_frontend_port() -> None
```

##### `reset_frontend_port_end` <a name="reset_frontend_port_end" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetFrontendPortEnd"></a>

```python
def reset_frontend_port_end() -> None
```

##### `reset_frontend_port_start` <a name="reset_frontend_port_start" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetFrontendPortStart"></a>

```python
def reset_frontend_port_start() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_timeout_in_minutes` <a name="reset_idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetIdleTimeoutInMinutes"></a>

```python
def reset_idle_timeout_in_minutes() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_nat_rule

lbNatRule.LbNatRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_nat_rule

lbNatRule.LbNatRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_nat_rule

lbNatRule.LbNatRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.backendIpConfigurationId">backend_ip_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendIpConfigurationId">frontend_ip_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference">LbNatRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.backendAddressPoolIdInput">backend_address_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.backendPortInput">backend_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.enableFloatingIpInput">enable_floating_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.enableTcpResetInput">enable_tcp_reset_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendIpConfigurationNameInput">frontend_ip_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPortEndInput">frontend_port_end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPortInput">frontend_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPortStartInput">frontend_port_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.idleTimeoutInMinutesInput">idle_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.loadbalancerIdInput">loadbalancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.enableFloatingIp">enable_floating_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.enableTcpReset">enable_tcp_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendIpConfigurationName">frontend_ip_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPort">frontend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPortEnd">frontend_port_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPortStart">frontend_port_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_ip_configuration_id`<sup>Required</sup> <a name="backend_ip_configuration_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.backendIpConfigurationId"></a>

```python
backend_ip_configuration_id: str
```

- *Type:* str

---

##### `frontend_ip_configuration_id`<sup>Required</sup> <a name="frontend_ip_configuration_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendIpConfigurationId"></a>

```python
frontend_ip_configuration_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.timeouts"></a>

```python
timeouts: LbNatRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference">LbNatRuleTimeoutsOutputReference</a>

---

##### `backend_address_pool_id_input`<sup>Optional</sup> <a name="backend_address_pool_id_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.backendAddressPoolIdInput"></a>

```python
backend_address_pool_id_input: str
```

- *Type:* str

---

##### `backend_port_input`<sup>Optional</sup> <a name="backend_port_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.backendPortInput"></a>

```python
backend_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_floating_ip_input`<sup>Optional</sup> <a name="enable_floating_ip_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.enableFloatingIpInput"></a>

```python
enable_floating_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_tcp_reset_input`<sup>Optional</sup> <a name="enable_tcp_reset_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.enableTcpResetInput"></a>

```python
enable_tcp_reset_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frontend_ip_configuration_name_input`<sup>Optional</sup> <a name="frontend_ip_configuration_name_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendIpConfigurationNameInput"></a>

```python
frontend_ip_configuration_name_input: str
```

- *Type:* str

---

##### `frontend_port_end_input`<sup>Optional</sup> <a name="frontend_port_end_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPortEndInput"></a>

```python
frontend_port_end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frontend_port_input`<sup>Optional</sup> <a name="frontend_port_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPortInput"></a>

```python
frontend_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frontend_port_start_input`<sup>Optional</sup> <a name="frontend_port_start_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPortStartInput"></a>

```python
frontend_port_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes_input`<sup>Optional</sup> <a name="idle_timeout_in_minutes_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.idleTimeoutInMinutesInput"></a>

```python
idle_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `loadbalancer_id_input`<sup>Optional</sup> <a name="loadbalancer_id_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.loadbalancerIdInput"></a>

```python
loadbalancer_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LbNatRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a>]

---

##### `backend_address_pool_id`<sup>Required</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.backendAddressPoolId"></a>

```python
backend_address_pool_id: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_floating_ip`<sup>Required</sup> <a name="enable_floating_ip" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.enableFloatingIp"></a>

```python
enable_floating_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_tcp_reset`<sup>Required</sup> <a name="enable_tcp_reset" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.enableTcpReset"></a>

```python
enable_tcp_reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frontend_ip_configuration_name`<sup>Required</sup> <a name="frontend_ip_configuration_name" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendIpConfigurationName"></a>

```python
frontend_ip_configuration_name: str
```

- *Type:* str

---

##### `frontend_port`<sup>Required</sup> <a name="frontend_port" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPort"></a>

```python
frontend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frontend_port_end`<sup>Required</sup> <a name="frontend_port_end" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPortEnd"></a>

```python
frontend_port_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frontend_port_start`<sup>Required</sup> <a name="frontend_port_start" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.frontendPortStart"></a>

```python
frontend_port_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes`<sup>Required</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.lbNatRule.LbNatRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbNatRuleConfig <a name="LbNatRuleConfig" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_nat_rule

lbNatRule.LbNatRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_port: typing.Union[int, float],
  frontend_ip_configuration_name: str,
  loadbalancer_id: str,
  name: str,
  protocol: str,
  resource_group_name: str,
  backend_address_pool_id: str = None,
  enable_floating_ip: typing.Union[bool, IResolvable] = None,
  enable_tcp_reset: typing.Union[bool, IResolvable] = None,
  frontend_port: typing.Union[int, float] = None,
  frontend_port_end: typing.Union[int, float] = None,
  frontend_port_start: typing.Union[int, float] = None,
  id: str = None,
  idle_timeout_in_minutes: typing.Union[int, float] = None,
  timeouts: LbNatRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#backend_port LbNatRule#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.frontendIpConfigurationName">frontend_ip_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_ip_configuration_name LbNatRule#frontend_ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#loadbalancer_id LbNatRule#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#name LbNatRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#protocol LbNatRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#resource_group_name LbNatRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#backend_address_pool_id LbNatRule#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.enableFloatingIp">enable_floating_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#enable_floating_ip LbNatRule#enable_floating_ip}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.enableTcpReset">enable_tcp_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#enable_tcp_reset LbNatRule#enable_tcp_reset}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.frontendPort">frontend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port LbNatRule#frontend_port}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.frontendPortEnd">frontend_port_end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port_end LbNatRule#frontend_port_end}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.frontendPortStart">frontend_port_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port_start LbNatRule#frontend_port_start}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#id LbNatRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#idle_timeout_in_minutes LbNatRule#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#backend_port LbNatRule#backend_port}.

---

##### `frontend_ip_configuration_name`<sup>Required</sup> <a name="frontend_ip_configuration_name" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.frontendIpConfigurationName"></a>

```python
frontend_ip_configuration_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_ip_configuration_name LbNatRule#frontend_ip_configuration_name}.

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#loadbalancer_id LbNatRule#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#name LbNatRule#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#protocol LbNatRule#protocol}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#resource_group_name LbNatRule#resource_group_name}.

---

##### `backend_address_pool_id`<sup>Optional</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.backendAddressPoolId"></a>

```python
backend_address_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#backend_address_pool_id LbNatRule#backend_address_pool_id}.

---

##### `enable_floating_ip`<sup>Optional</sup> <a name="enable_floating_ip" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.enableFloatingIp"></a>

```python
enable_floating_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#enable_floating_ip LbNatRule#enable_floating_ip}.

---

##### `enable_tcp_reset`<sup>Optional</sup> <a name="enable_tcp_reset" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.enableTcpReset"></a>

```python
enable_tcp_reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#enable_tcp_reset LbNatRule#enable_tcp_reset}.

---

##### `frontend_port`<sup>Optional</sup> <a name="frontend_port" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.frontendPort"></a>

```python
frontend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port LbNatRule#frontend_port}.

---

##### `frontend_port_end`<sup>Optional</sup> <a name="frontend_port_end" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.frontendPortEnd"></a>

```python
frontend_port_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port_end LbNatRule#frontend_port_end}.

---

##### `frontend_port_start`<sup>Optional</sup> <a name="frontend_port_start" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.frontendPortStart"></a>

```python
frontend_port_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#frontend_port_start LbNatRule#frontend_port_start}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#id LbNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout_in_minutes`<sup>Optional</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#idle_timeout_in_minutes LbNatRule#idle_timeout_in_minutes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleConfig.property.timeouts"></a>

```python
timeouts: LbNatRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#timeouts LbNatRule#timeouts}

---

### LbNatRuleTimeouts <a name="LbNatRuleTimeouts" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_nat_rule

lbNatRule.LbNatRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#create LbNatRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#delete LbNatRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#read LbNatRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#update LbNatRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#create LbNatRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#delete LbNatRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#read LbNatRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/lb_nat_rule#update LbNatRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbNatRuleTimeoutsOutputReference <a name="LbNatRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_nat_rule

lbNatRule.LbNatRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LbNatRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a>]

---



