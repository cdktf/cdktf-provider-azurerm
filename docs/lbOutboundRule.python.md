# `azurerm_lb_outbound_rule`

Refer to the Terraform Registory for docs: [`azurerm_lb_outbound_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule).

# `lbOutboundRule` Submodule <a name="`lbOutboundRule` Submodule" id="@cdktf/provider-azurerm.lbOutboundRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbOutboundRule <a name="LbOutboundRule" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule azurerm_lb_outbound_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_outbound_rule

lbOutboundRule.LbOutboundRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_address_pool_id: str,
  loadbalancer_id: str,
  name: str,
  protocol: str,
  allocated_outbound_ports: typing.Union[int, float] = None,
  enable_tcp_reset: typing.Union[bool, IResolvable] = None,
  frontend_ip_configuration: typing.Union[IResolvable, typing.List[LbOutboundRuleFrontendIpConfiguration]] = None,
  id: str = None,
  idle_timeout_in_minutes: typing.Union[int, float] = None,
  timeouts: LbOutboundRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#backend_address_pool_id LbOutboundRule#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#loadbalancer_id LbOutboundRule#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#protocol LbOutboundRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.allocatedOutboundPorts">allocated_outbound_ports</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#allocated_outbound_ports LbOutboundRule#allocated_outbound_ports}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.enableTcpReset">enable_tcp_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#enable_tcp_reset LbOutboundRule#enable_tcp_reset}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.frontendIpConfiguration">frontend_ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>]]</code> | frontend_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#id LbOutboundRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#idle_timeout_in_minutes LbOutboundRule#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_address_pool_id`<sup>Required</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.backendAddressPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#backend_address_pool_id LbOutboundRule#backend_address_pool_id}.

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.loadbalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#loadbalancer_id LbOutboundRule#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#protocol LbOutboundRule#protocol}.

---

##### `allocated_outbound_ports`<sup>Optional</sup> <a name="allocated_outbound_ports" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.allocatedOutboundPorts"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#allocated_outbound_ports LbOutboundRule#allocated_outbound_ports}.

---

##### `enable_tcp_reset`<sup>Optional</sup> <a name="enable_tcp_reset" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.enableTcpReset"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#enable_tcp_reset LbOutboundRule#enable_tcp_reset}.

---

##### `frontend_ip_configuration`<sup>Optional</sup> <a name="frontend_ip_configuration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.frontendIpConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>]]

frontend_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#frontend_ip_configuration LbOutboundRule#frontend_ip_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#id LbOutboundRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout_in_minutes`<sup>Optional</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.idleTimeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#idle_timeout_in_minutes LbOutboundRule#idle_timeout_in_minutes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#timeouts LbOutboundRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putFrontendIpConfiguration">put_frontend_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetAllocatedOutboundPorts">reset_allocated_outbound_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetEnableTcpReset">reset_enable_tcp_reset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetFrontendIpConfiguration">reset_frontend_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetIdleTimeoutInMinutes">reset_idle_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_frontend_ip_configuration` <a name="put_frontend_ip_configuration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putFrontendIpConfiguration"></a>

```python
def put_frontend_ip_configuration(
  value: typing.Union[IResolvable, typing.List[LbOutboundRuleFrontendIpConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putFrontendIpConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#create LbOutboundRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#delete LbOutboundRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#read LbOutboundRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#update LbOutboundRule#update}.

---

##### `reset_allocated_outbound_ports` <a name="reset_allocated_outbound_ports" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetAllocatedOutboundPorts"></a>

```python
def reset_allocated_outbound_ports() -> None
```

##### `reset_enable_tcp_reset` <a name="reset_enable_tcp_reset" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetEnableTcpReset"></a>

```python
def reset_enable_tcp_reset() -> None
```

##### `reset_frontend_ip_configuration` <a name="reset_frontend_ip_configuration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetFrontendIpConfiguration"></a>

```python
def reset_frontend_ip_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_timeout_in_minutes` <a name="reset_idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetIdleTimeoutInMinutes"></a>

```python
def reset_idle_timeout_in_minutes() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_outbound_rule

lbOutboundRule.LbOutboundRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_outbound_rule

lbOutboundRule.LbOutboundRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_outbound_rule

lbOutboundRule.LbOutboundRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfiguration">frontend_ip_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList">LbOutboundRuleFrontendIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference">LbOutboundRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPortsInput">allocated_outbound_ports_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolIdInput">backend_address_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpResetInput">enable_tcp_reset_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfigurationInput">frontend_ip_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutesInput">idle_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerIdInput">loadbalancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPorts">allocated_outbound_ports</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpReset">enable_tcp_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `frontend_ip_configuration`<sup>Required</sup> <a name="frontend_ip_configuration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfiguration"></a>

```python
frontend_ip_configuration: LbOutboundRuleFrontendIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList">LbOutboundRuleFrontendIpConfigurationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeouts"></a>

```python
timeouts: LbOutboundRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference">LbOutboundRuleTimeoutsOutputReference</a>

---

##### `allocated_outbound_ports_input`<sup>Optional</sup> <a name="allocated_outbound_ports_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPortsInput"></a>

```python
allocated_outbound_ports_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend_address_pool_id_input`<sup>Optional</sup> <a name="backend_address_pool_id_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolIdInput"></a>

```python
backend_address_pool_id_input: str
```

- *Type:* str

---

##### `enable_tcp_reset_input`<sup>Optional</sup> <a name="enable_tcp_reset_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpResetInput"></a>

```python
enable_tcp_reset_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frontend_ip_configuration_input`<sup>Optional</sup> <a name="frontend_ip_configuration_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.frontendIpConfigurationInput"></a>

```python
frontend_ip_configuration_input: typing.Union[IResolvable, typing.List[LbOutboundRuleFrontendIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes_input`<sup>Optional</sup> <a name="idle_timeout_in_minutes_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutesInput"></a>

```python
idle_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `loadbalancer_id_input`<sup>Optional</sup> <a name="loadbalancer_id_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerIdInput"></a>

```python
loadbalancer_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LbOutboundRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>, cdktf.IResolvable]

---

##### `allocated_outbound_ports`<sup>Required</sup> <a name="allocated_outbound_ports" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.allocatedOutboundPorts"></a>

```python
allocated_outbound_ports: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend_address_pool_id`<sup>Required</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.backendAddressPoolId"></a>

```python
backend_address_pool_id: str
```

- *Type:* str

---

##### `enable_tcp_reset`<sup>Required</sup> <a name="enable_tcp_reset" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.enableTcpReset"></a>

```python
enable_tcp_reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes`<sup>Required</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbOutboundRuleConfig <a name="LbOutboundRuleConfig" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_outbound_rule

lbOutboundRule.LbOutboundRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_address_pool_id: str,
  loadbalancer_id: str,
  name: str,
  protocol: str,
  allocated_outbound_ports: typing.Union[int, float] = None,
  enable_tcp_reset: typing.Union[bool, IResolvable] = None,
  frontend_ip_configuration: typing.Union[IResolvable, typing.List[LbOutboundRuleFrontendIpConfiguration]] = None,
  id: str = None,
  idle_timeout_in_minutes: typing.Union[int, float] = None,
  timeouts: LbOutboundRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#backend_address_pool_id LbOutboundRule#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#loadbalancer_id LbOutboundRule#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#protocol LbOutboundRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.allocatedOutboundPorts">allocated_outbound_ports</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#allocated_outbound_ports LbOutboundRule#allocated_outbound_ports}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.enableTcpReset">enable_tcp_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#enable_tcp_reset LbOutboundRule#enable_tcp_reset}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.frontendIpConfiguration">frontend_ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>]]</code> | frontend_ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#id LbOutboundRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#idle_timeout_in_minutes LbOutboundRule#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_address_pool_id`<sup>Required</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.backendAddressPoolId"></a>

```python
backend_address_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#backend_address_pool_id LbOutboundRule#backend_address_pool_id}.

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#loadbalancer_id LbOutboundRule#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#protocol LbOutboundRule#protocol}.

---

##### `allocated_outbound_ports`<sup>Optional</sup> <a name="allocated_outbound_ports" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.allocatedOutboundPorts"></a>

```python
allocated_outbound_ports: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#allocated_outbound_ports LbOutboundRule#allocated_outbound_ports}.

---

##### `enable_tcp_reset`<sup>Optional</sup> <a name="enable_tcp_reset" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.enableTcpReset"></a>

```python
enable_tcp_reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#enable_tcp_reset LbOutboundRule#enable_tcp_reset}.

---

##### `frontend_ip_configuration`<sup>Optional</sup> <a name="frontend_ip_configuration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.frontendIpConfiguration"></a>

```python
frontend_ip_configuration: typing.Union[IResolvable, typing.List[LbOutboundRuleFrontendIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>]]

frontend_ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#frontend_ip_configuration LbOutboundRule#frontend_ip_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#id LbOutboundRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout_in_minutes`<sup>Optional</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#idle_timeout_in_minutes LbOutboundRule#idle_timeout_in_minutes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleConfig.property.timeouts"></a>

```python
timeouts: LbOutboundRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#timeouts LbOutboundRule#timeouts}

---

### LbOutboundRuleFrontendIpConfiguration <a name="LbOutboundRuleFrontendIpConfiguration" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_outbound_rule

lbOutboundRule.LbOutboundRuleFrontendIpConfiguration(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#name LbOutboundRule#name}.

---

### LbOutboundRuleTimeouts <a name="LbOutboundRuleTimeouts" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_outbound_rule

lbOutboundRule.LbOutboundRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#create LbOutboundRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#delete LbOutboundRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#read LbOutboundRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#update LbOutboundRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#create LbOutboundRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#delete LbOutboundRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#read LbOutboundRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/lb_outbound_rule#update LbOutboundRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbOutboundRuleFrontendIpConfigurationList <a name="LbOutboundRuleFrontendIpConfigurationList" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_outbound_rule

lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LbOutboundRuleFrontendIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LbOutboundRuleFrontendIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>]]

---


### LbOutboundRuleFrontendIpConfigurationOutputReference <a name="LbOutboundRuleFrontendIpConfigurationOutputReference" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_outbound_rule

lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LbOutboundRuleFrontendIpConfiguration, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleFrontendIpConfiguration">LbOutboundRuleFrontendIpConfiguration</a>, cdktf.IResolvable]

---


### LbOutboundRuleTimeoutsOutputReference <a name="LbOutboundRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_outbound_rule

lbOutboundRule.LbOutboundRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LbOutboundRuleTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.lbOutboundRule.LbOutboundRuleTimeouts">LbOutboundRuleTimeouts</a>, cdktf.IResolvable]

---



