# `lbRule` Submodule <a name="`lbRule` Submodule" id="@cdktf/provider-azurerm.lbRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbRule <a name="LbRule" id="@cdktf/provider-azurerm.lbRule.LbRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule azurerm_lb_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_rule

lbRule.LbRule(
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
  frontend_port: typing.Union[int, float],
  loadbalancer_id: str,
  name: str,
  protocol: str,
  backend_address_pool_ids: typing.List[str] = None,
  disable_outbound_snat: typing.Union[bool, IResolvable] = None,
  enable_floating_ip: typing.Union[bool, IResolvable] = None,
  enable_tcp_reset: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idle_timeout_in_minutes: typing.Union[int, float] = None,
  load_distribution: str = None,
  probe_id: str = None,
  timeouts: LbRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#backend_port LbRule#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.frontendIpConfigurationName">frontend_ip_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#frontend_ip_configuration_name LbRule#frontend_ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.frontendPort">frontend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#frontend_port LbRule#frontend_port}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#loadbalancer_id LbRule#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#name LbRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#protocol LbRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.backendAddressPoolIds">backend_address_pool_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#backend_address_pool_ids LbRule#backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.disableOutboundSnat">disable_outbound_snat</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#disable_outbound_snat LbRule#disable_outbound_snat}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.enableFloatingIp">enable_floating_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#enable_floating_ip LbRule#enable_floating_ip}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.enableTcpReset">enable_tcp_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#enable_tcp_reset LbRule#enable_tcp_reset}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#id LbRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#idle_timeout_in_minutes LbRule#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.loadDistribution">load_distribution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#load_distribution LbRule#load_distribution}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.probeId">probe_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#probe_id LbRule#probe_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts">LbRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.backendPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#backend_port LbRule#backend_port}.

---

##### `frontend_ip_configuration_name`<sup>Required</sup> <a name="frontend_ip_configuration_name" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.frontendIpConfigurationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#frontend_ip_configuration_name LbRule#frontend_ip_configuration_name}.

---

##### `frontend_port`<sup>Required</sup> <a name="frontend_port" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.frontendPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#frontend_port LbRule#frontend_port}.

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.loadbalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#loadbalancer_id LbRule#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#name LbRule#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#protocol LbRule#protocol}.

---

##### `backend_address_pool_ids`<sup>Optional</sup> <a name="backend_address_pool_ids" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.backendAddressPoolIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#backend_address_pool_ids LbRule#backend_address_pool_ids}.

---

##### `disable_outbound_snat`<sup>Optional</sup> <a name="disable_outbound_snat" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.disableOutboundSnat"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#disable_outbound_snat LbRule#disable_outbound_snat}.

---

##### `enable_floating_ip`<sup>Optional</sup> <a name="enable_floating_ip" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.enableFloatingIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#enable_floating_ip LbRule#enable_floating_ip}.

---

##### `enable_tcp_reset`<sup>Optional</sup> <a name="enable_tcp_reset" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.enableTcpReset"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#enable_tcp_reset LbRule#enable_tcp_reset}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#id LbRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout_in_minutes`<sup>Optional</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.idleTimeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#idle_timeout_in_minutes LbRule#idle_timeout_in_minutes}.

---

##### `load_distribution`<sup>Optional</sup> <a name="load_distribution" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.loadDistribution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#load_distribution LbRule#load_distribution}.

---

##### `probe_id`<sup>Optional</sup> <a name="probe_id" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.probeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#probe_id LbRule#probe_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbRule.LbRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts">LbRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#timeouts LbRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.resetBackendAddressPoolIds">reset_backend_address_pool_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.resetDisableOutboundSnat">reset_disable_outbound_snat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.resetEnableFloatingIp">reset_enable_floating_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.resetEnableTcpReset">reset_enable_tcp_reset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.resetIdleTimeoutInMinutes">reset_idle_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.resetLoadDistribution">reset_load_distribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.resetProbeId">reset_probe_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbRule.LbRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.lbRule.LbRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lbRule.LbRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbRule.LbRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.lbRule.LbRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.lbRule.LbRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.lbRule.LbRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.lbRule.LbRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.lbRule.LbRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.lbRule.LbRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.lbRule.LbRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.lbRule.LbRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.lbRule.LbRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.lbRule.LbRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbRule.LbRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbRule.LbRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.lbRule.LbRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbRule.LbRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.lbRule.LbRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.lbRule.LbRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.lbRule.LbRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.lbRule.LbRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbRule.LbRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.lbRule.LbRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lbRule.LbRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#create LbRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lbRule.LbRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#delete LbRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lbRule.LbRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#read LbRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lbRule.LbRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#update LbRule#update}.

---

##### `reset_backend_address_pool_ids` <a name="reset_backend_address_pool_ids" id="@cdktf/provider-azurerm.lbRule.LbRule.resetBackendAddressPoolIds"></a>

```python
def reset_backend_address_pool_ids() -> None
```

##### `reset_disable_outbound_snat` <a name="reset_disable_outbound_snat" id="@cdktf/provider-azurerm.lbRule.LbRule.resetDisableOutboundSnat"></a>

```python
def reset_disable_outbound_snat() -> None
```

##### `reset_enable_floating_ip` <a name="reset_enable_floating_ip" id="@cdktf/provider-azurerm.lbRule.LbRule.resetEnableFloatingIp"></a>

```python
def reset_enable_floating_ip() -> None
```

##### `reset_enable_tcp_reset` <a name="reset_enable_tcp_reset" id="@cdktf/provider-azurerm.lbRule.LbRule.resetEnableTcpReset"></a>

```python
def reset_enable_tcp_reset() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.lbRule.LbRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_timeout_in_minutes` <a name="reset_idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbRule.LbRule.resetIdleTimeoutInMinutes"></a>

```python
def reset_idle_timeout_in_minutes() -> None
```

##### `reset_load_distribution` <a name="reset_load_distribution" id="@cdktf/provider-azurerm.lbRule.LbRule.resetLoadDistribution"></a>

```python
def reset_load_distribution() -> None
```

##### `reset_probe_id` <a name="reset_probe_id" id="@cdktf/provider-azurerm.lbRule.LbRule.resetProbeId"></a>

```python
def reset_probe_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.lbRule.LbRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LbRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.lbRule.LbRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_rule

lbRule.LbRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbRule.LbRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.lbRule.LbRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_rule

lbRule.LbRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbRule.LbRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.lbRule.LbRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_rule

lbRule.LbRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbRule.LbRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.lbRule.LbRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_rule

lbRule.LbRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LbRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbRule.LbRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.lbRule.LbRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LbRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.lbRule.LbRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LbRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbRule.LbRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.frontendIpConfigurationId">frontend_ip_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference">LbRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.backendAddressPoolIdsInput">backend_address_pool_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.backendPortInput">backend_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.disableOutboundSnatInput">disable_outbound_snat_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.enableFloatingIpInput">enable_floating_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.enableTcpResetInput">enable_tcp_reset_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.frontendIpConfigurationNameInput">frontend_ip_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.frontendPortInput">frontend_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.idleTimeoutInMinutesInput">idle_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.loadbalancerIdInput">loadbalancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.loadDistributionInput">load_distribution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.probeIdInput">probe_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts">LbRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.backendAddressPoolIds">backend_address_pool_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.disableOutboundSnat">disable_outbound_snat</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.enableFloatingIp">enable_floating_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.enableTcpReset">enable_tcp_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.frontendIpConfigurationName">frontend_ip_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.frontendPort">frontend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.loadDistribution">load_distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.probeId">probe_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.lbRule.LbRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.lbRule.LbRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbRule.LbRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.lbRule.LbRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.lbRule.LbRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.lbRule.LbRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.lbRule.LbRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbRule.LbRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbRule.LbRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbRule.LbRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbRule.LbRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbRule.LbRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbRule.LbRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbRule.LbRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `frontend_ip_configuration_id`<sup>Required</sup> <a name="frontend_ip_configuration_id" id="@cdktf/provider-azurerm.lbRule.LbRule.property.frontendIpConfigurationId"></a>

```python
frontend_ip_configuration_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbRule.LbRule.property.timeouts"></a>

```python
timeouts: LbRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference">LbRuleTimeoutsOutputReference</a>

---

##### `backend_address_pool_ids_input`<sup>Optional</sup> <a name="backend_address_pool_ids_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.backendAddressPoolIdsInput"></a>

```python
backend_address_pool_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_port_input`<sup>Optional</sup> <a name="backend_port_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.backendPortInput"></a>

```python
backend_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_outbound_snat_input`<sup>Optional</sup> <a name="disable_outbound_snat_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.disableOutboundSnatInput"></a>

```python
disable_outbound_snat_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_floating_ip_input`<sup>Optional</sup> <a name="enable_floating_ip_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.enableFloatingIpInput"></a>

```python
enable_floating_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_tcp_reset_input`<sup>Optional</sup> <a name="enable_tcp_reset_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.enableTcpResetInput"></a>

```python
enable_tcp_reset_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frontend_ip_configuration_name_input`<sup>Optional</sup> <a name="frontend_ip_configuration_name_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.frontendIpConfigurationNameInput"></a>

```python
frontend_ip_configuration_name_input: str
```

- *Type:* str

---

##### `frontend_port_input`<sup>Optional</sup> <a name="frontend_port_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.frontendPortInput"></a>

```python
frontend_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes_input`<sup>Optional</sup> <a name="idle_timeout_in_minutes_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.idleTimeoutInMinutesInput"></a>

```python
idle_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `loadbalancer_id_input`<sup>Optional</sup> <a name="loadbalancer_id_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.loadbalancerIdInput"></a>

```python
loadbalancer_id_input: str
```

- *Type:* str

---

##### `load_distribution_input`<sup>Optional</sup> <a name="load_distribution_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.loadDistributionInput"></a>

```python
load_distribution_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `probe_id_input`<sup>Optional</sup> <a name="probe_id_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.probeIdInput"></a>

```python
probe_id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.lbRule.LbRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LbRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts">LbRuleTimeouts</a>]

---

##### `backend_address_pool_ids`<sup>Required</sup> <a name="backend_address_pool_ids" id="@cdktf/provider-azurerm.lbRule.LbRule.property.backendAddressPoolIds"></a>

```python
backend_address_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.lbRule.LbRule.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_outbound_snat`<sup>Required</sup> <a name="disable_outbound_snat" id="@cdktf/provider-azurerm.lbRule.LbRule.property.disableOutboundSnat"></a>

```python
disable_outbound_snat: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_floating_ip`<sup>Required</sup> <a name="enable_floating_ip" id="@cdktf/provider-azurerm.lbRule.LbRule.property.enableFloatingIp"></a>

```python
enable_floating_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_tcp_reset`<sup>Required</sup> <a name="enable_tcp_reset" id="@cdktf/provider-azurerm.lbRule.LbRule.property.enableTcpReset"></a>

```python
enable_tcp_reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frontend_ip_configuration_name`<sup>Required</sup> <a name="frontend_ip_configuration_name" id="@cdktf/provider-azurerm.lbRule.LbRule.property.frontendIpConfigurationName"></a>

```python
frontend_ip_configuration_name: str
```

- *Type:* str

---

##### `frontend_port`<sup>Required</sup> <a name="frontend_port" id="@cdktf/provider-azurerm.lbRule.LbRule.property.frontendPort"></a>

```python
frontend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbRule.LbRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes`<sup>Required</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbRule.LbRule.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurerm.lbRule.LbRule.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

---

##### `load_distribution`<sup>Required</sup> <a name="load_distribution" id="@cdktf/provider-azurerm.lbRule.LbRule.property.loadDistribution"></a>

```python
load_distribution: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbRule.LbRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `probe_id`<sup>Required</sup> <a name="probe_id" id="@cdktf/provider-azurerm.lbRule.LbRule.property.probeId"></a>

```python
probe_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.lbRule.LbRule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.lbRule.LbRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbRuleConfig <a name="LbRuleConfig" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_rule

lbRule.LbRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_port: typing.Union[int, float],
  frontend_ip_configuration_name: str,
  frontend_port: typing.Union[int, float],
  loadbalancer_id: str,
  name: str,
  protocol: str,
  backend_address_pool_ids: typing.List[str] = None,
  disable_outbound_snat: typing.Union[bool, IResolvable] = None,
  enable_floating_ip: typing.Union[bool, IResolvable] = None,
  enable_tcp_reset: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idle_timeout_in_minutes: typing.Union[int, float] = None,
  load_distribution: str = None,
  probe_id: str = None,
  timeouts: LbRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#backend_port LbRule#backend_port}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.frontendIpConfigurationName">frontend_ip_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#frontend_ip_configuration_name LbRule#frontend_ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.frontendPort">frontend_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#frontend_port LbRule#frontend_port}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.loadbalancerId">loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#loadbalancer_id LbRule#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#name LbRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#protocol LbRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.backendAddressPoolIds">backend_address_pool_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#backend_address_pool_ids LbRule#backend_address_pool_ids}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.disableOutboundSnat">disable_outbound_snat</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#disable_outbound_snat LbRule#disable_outbound_snat}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.enableFloatingIp">enable_floating_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#enable_floating_ip LbRule#enable_floating_ip}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.enableTcpReset">enable_tcp_reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#enable_tcp_reset LbRule#enable_tcp_reset}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#id LbRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#idle_timeout_in_minutes LbRule#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.loadDistribution">load_distribution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#load_distribution LbRule#load_distribution}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.probeId">probe_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#probe_id LbRule#probe_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts">LbRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#backend_port LbRule#backend_port}.

---

##### `frontend_ip_configuration_name`<sup>Required</sup> <a name="frontend_ip_configuration_name" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.frontendIpConfigurationName"></a>

```python
frontend_ip_configuration_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#frontend_ip_configuration_name LbRule#frontend_ip_configuration_name}.

---

##### `frontend_port`<sup>Required</sup> <a name="frontend_port" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.frontendPort"></a>

```python
frontend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#frontend_port LbRule#frontend_port}.

---

##### `loadbalancer_id`<sup>Required</sup> <a name="loadbalancer_id" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.loadbalancerId"></a>

```python
loadbalancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#loadbalancer_id LbRule#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#name LbRule#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#protocol LbRule#protocol}.

---

##### `backend_address_pool_ids`<sup>Optional</sup> <a name="backend_address_pool_ids" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.backendAddressPoolIds"></a>

```python
backend_address_pool_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#backend_address_pool_ids LbRule#backend_address_pool_ids}.

---

##### `disable_outbound_snat`<sup>Optional</sup> <a name="disable_outbound_snat" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.disableOutboundSnat"></a>

```python
disable_outbound_snat: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#disable_outbound_snat LbRule#disable_outbound_snat}.

---

##### `enable_floating_ip`<sup>Optional</sup> <a name="enable_floating_ip" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.enableFloatingIp"></a>

```python
enable_floating_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#enable_floating_ip LbRule#enable_floating_ip}.

---

##### `enable_tcp_reset`<sup>Optional</sup> <a name="enable_tcp_reset" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.enableTcpReset"></a>

```python
enable_tcp_reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#enable_tcp_reset LbRule#enable_tcp_reset}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#id LbRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout_in_minutes`<sup>Optional</sup> <a name="idle_timeout_in_minutes" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#idle_timeout_in_minutes LbRule#idle_timeout_in_minutes}.

---

##### `load_distribution`<sup>Optional</sup> <a name="load_distribution" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.loadDistribution"></a>

```python
load_distribution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#load_distribution LbRule#load_distribution}.

---

##### `probe_id`<sup>Optional</sup> <a name="probe_id" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.probeId"></a>

```python
probe_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#probe_id LbRule#probe_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbRule.LbRuleConfig.property.timeouts"></a>

```python
timeouts: LbRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts">LbRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#timeouts LbRule#timeouts}

---

### LbRuleTimeouts <a name="LbRuleTimeouts" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_rule

lbRule.LbRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#create LbRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#delete LbRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#read LbRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#update LbRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#create LbRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#delete LbRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#read LbRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/lb_rule#update LbRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbRuleTimeoutsOutputReference <a name="LbRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_rule

lbRule.LbRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts">LbRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lbRule.LbRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LbRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbRule.LbRuleTimeouts">LbRuleTimeouts</a>]

---



