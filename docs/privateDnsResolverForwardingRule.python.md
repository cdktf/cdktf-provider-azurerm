# `privateDnsResolverForwardingRule` Submodule <a name="`privateDnsResolverForwardingRule` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverForwardingRule <a name="PrivateDnsResolverForwardingRule" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule azurerm_private_dns_resolver_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_forwarding_rule

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_forwarding_ruleset_id: str,
  domain_name: str,
  name: str,
  target_dns_servers: typing.Union[IResolvable, typing.List[PrivateDnsResolverForwardingRuleTargetDnsServers]],
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: PrivateDnsResolverForwardingRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.dnsForwardingRulesetId">dns_forwarding_ruleset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id PrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#domain_name PrivateDnsResolverForwardingRule#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#name PrivateDnsResolverForwardingRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.targetDnsServers">target_dns_servers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>]]</code> | target_dns_servers block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#enabled PrivateDnsResolverForwardingRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#id PrivateDnsResolverForwardingRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#metadata PrivateDnsResolverForwardingRule#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_forwarding_ruleset_id`<sup>Required</sup> <a name="dns_forwarding_ruleset_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.dnsForwardingRulesetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id PrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#domain_name PrivateDnsResolverForwardingRule#domain_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#name PrivateDnsResolverForwardingRule#name}.

---

##### `target_dns_servers`<sup>Required</sup> <a name="target_dns_servers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.targetDnsServers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>]]

target_dns_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#target_dns_servers PrivateDnsResolverForwardingRule#target_dns_servers}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#enabled PrivateDnsResolverForwardingRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#id PrivateDnsResolverForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#metadata PrivateDnsResolverForwardingRule#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#timeouts PrivateDnsResolverForwardingRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers">put_target_dns_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_target_dns_servers` <a name="put_target_dns_servers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers"></a>

```python
def put_target_dns_servers(
  value: typing.Union[IResolvable, typing.List[PrivateDnsResolverForwardingRuleTargetDnsServers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTargetDnsServers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#create PrivateDnsResolverForwardingRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#delete PrivateDnsResolverForwardingRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#read PrivateDnsResolverForwardingRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#update PrivateDnsResolverForwardingRule#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrivateDnsResolverForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_forwarding_rule

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_forwarding_rule

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_forwarding_rule

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_forwarding_rule

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrivateDnsResolverForwardingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivateDnsResolverForwardingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivateDnsResolverForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServers">target_dns_servers</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList">PrivateDnsResolverForwardingRuleTargetDnsServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference">PrivateDnsResolverForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetIdInput">dns_forwarding_ruleset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServersInput">target_dns_servers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetId">dns_forwarding_ruleset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `target_dns_servers`<sup>Required</sup> <a name="target_dns_servers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServers"></a>

```python
target_dns_servers: PrivateDnsResolverForwardingRuleTargetDnsServersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList">PrivateDnsResolverForwardingRuleTargetDnsServersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeouts"></a>

```python
timeouts: PrivateDnsResolverForwardingRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference">PrivateDnsResolverForwardingRuleTimeoutsOutputReference</a>

---

##### `dns_forwarding_ruleset_id_input`<sup>Optional</sup> <a name="dns_forwarding_ruleset_id_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetIdInput"></a>

```python
dns_forwarding_ruleset_id_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_dns_servers_input`<sup>Optional</sup> <a name="target_dns_servers_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.targetDnsServersInput"></a>

```python
target_dns_servers_input: typing.Union[IResolvable, typing.List[PrivateDnsResolverForwardingRuleTargetDnsServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PrivateDnsResolverForwardingRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>]

---

##### `dns_forwarding_ruleset_id`<sup>Required</sup> <a name="dns_forwarding_ruleset_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.dnsForwardingRulesetId"></a>

```python
dns_forwarding_ruleset_id: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverForwardingRuleConfig <a name="PrivateDnsResolverForwardingRuleConfig" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_forwarding_rule

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_forwarding_ruleset_id: str,
  domain_name: str,
  name: str,
  target_dns_servers: typing.Union[IResolvable, typing.List[PrivateDnsResolverForwardingRuleTargetDnsServers]],
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  timeouts: PrivateDnsResolverForwardingRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dnsForwardingRulesetId">dns_forwarding_ruleset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id PrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#domain_name PrivateDnsResolverForwardingRule#domain_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#name PrivateDnsResolverForwardingRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.targetDnsServers">target_dns_servers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>]]</code> | target_dns_servers block. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#enabled PrivateDnsResolverForwardingRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#id PrivateDnsResolverForwardingRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#metadata PrivateDnsResolverForwardingRule#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_forwarding_ruleset_id`<sup>Required</sup> <a name="dns_forwarding_ruleset_id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.dnsForwardingRulesetId"></a>

```python
dns_forwarding_ruleset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id PrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#domain_name PrivateDnsResolverForwardingRule#domain_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#name PrivateDnsResolverForwardingRule#name}.

---

##### `target_dns_servers`<sup>Required</sup> <a name="target_dns_servers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.targetDnsServers"></a>

```python
target_dns_servers: typing.Union[IResolvable, typing.List[PrivateDnsResolverForwardingRuleTargetDnsServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>]]

target_dns_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#target_dns_servers PrivateDnsResolverForwardingRule#target_dns_servers}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#enabled PrivateDnsResolverForwardingRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#id PrivateDnsResolverForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#metadata PrivateDnsResolverForwardingRule#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleConfig.property.timeouts"></a>

```python
timeouts: PrivateDnsResolverForwardingRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#timeouts PrivateDnsResolverForwardingRule#timeouts}

---

### PrivateDnsResolverForwardingRuleTargetDnsServers <a name="PrivateDnsResolverForwardingRuleTargetDnsServers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_forwarding_rule

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers(
  ip_address: str,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#ip_address PrivateDnsResolverForwardingRule#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#port PrivateDnsResolverForwardingRule#port}. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#ip_address PrivateDnsResolverForwardingRule#ip_address}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#port PrivateDnsResolverForwardingRule#port}.

---

### PrivateDnsResolverForwardingRuleTimeouts <a name="PrivateDnsResolverForwardingRuleTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_forwarding_rule

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#create PrivateDnsResolverForwardingRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#delete PrivateDnsResolverForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#read PrivateDnsResolverForwardingRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#update PrivateDnsResolverForwardingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#create PrivateDnsResolverForwardingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#delete PrivateDnsResolverForwardingRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#read PrivateDnsResolverForwardingRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/private_dns_resolver_forwarding_rule#update PrivateDnsResolverForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverForwardingRuleTargetDnsServersList <a name="PrivateDnsResolverForwardingRuleTargetDnsServersList" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_forwarding_rule

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PrivateDnsResolverForwardingRuleTargetDnsServers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>]]

---


### PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference <a name="PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_forwarding_rule

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivateDnsResolverForwardingRuleTargetDnsServers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTargetDnsServers">PrivateDnsResolverForwardingRuleTargetDnsServers</a>]

---


### PrivateDnsResolverForwardingRuleTimeoutsOutputReference <a name="PrivateDnsResolverForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_forwarding_rule

privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivateDnsResolverForwardingRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsResolverForwardingRule.PrivateDnsResolverForwardingRuleTimeouts">PrivateDnsResolverForwardingRuleTimeouts</a>]

---



