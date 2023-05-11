# `azurerm_monitor_action_rule_action_group`

Refer to the Terraform Registory for docs: [`azurerm_monitor_action_rule_action_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group).

# `monitorActionRuleActionGroup` Submodule <a name="`monitorActionRuleActionGroup` Submodule" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorActionRuleActionGroup <a name="MonitorActionRuleActionGroup" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group azurerm_monitor_action_rule_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.NewMonitorActionRuleActionGroup(scope Construct, id *string, config MonitorActionRuleActionGroupConfig) MonitorActionRuleActionGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig">MonitorActionRuleActionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig">MonitorActionRuleActionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition"></a>

```go
func PutCondition(value MonitorActionRuleActionGroupCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope"></a>

```go
func PutScope(value MonitorActionRuleActionGroupScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts"></a>

```go
func PutTimeouts(value MonitorActionRuleActionGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.MonitorActionRuleActionGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.MonitorActionRuleActionGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.MonitorActionRuleActionGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference">MonitorActionRuleActionGroupConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference">MonitorActionRuleActionGroupScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference">MonitorActionRuleActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupIdInput">ActionGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupId">ActionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.condition"></a>

```go
func Condition() MonitorActionRuleActionGroupConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference">MonitorActionRuleActionGroupConditionOutputReference</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scope"></a>

```go
func Scope() MonitorActionRuleActionGroupScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference">MonitorActionRuleActionGroupScopeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeouts"></a>

```go
func Timeouts() MonitorActionRuleActionGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference">MonitorActionRuleActionGroupTimeoutsOutputReference</a>

---

##### `ActionGroupIdInput`<sup>Optional</sup> <a name="ActionGroupIdInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupIdInput"></a>

```go
func ActionGroupIdInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.conditionInput"></a>

```go
func ConditionInput() MonitorActionRuleActionGroupCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.scopeInput"></a>

```go
func ScopeInput() MonitorActionRuleActionGroupScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ActionGroupId`<sup>Required</sup> <a name="ActionGroupId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.actionGroupId"></a>

```go
func ActionGroupId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorActionRuleActionGroupCondition <a name="MonitorActionRuleActionGroupCondition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

&monitoractionruleactiongroup.MonitorActionRuleActionGroupCondition {
	AlertContext: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext,
	AlertRuleId: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId,
	Description: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription,
	Monitor: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor,
	MonitorService: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService,
	Severity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity,
	TargetResourceType: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertContext">AlertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | alert_context block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertRuleId">AlertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | alert_rule_id block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.description">Description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | description block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitorService">MonitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | monitor_service block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.severity">Severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | severity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.targetResourceType">TargetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | target_resource_type block. |

---

##### `AlertContext`<sup>Optional</sup> <a name="AlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertContext"></a>

```go
AlertContext MonitorActionRuleActionGroupConditionAlertContext
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#alert_context MonitorActionRuleActionGroup#alert_context}

---

##### `AlertRuleId`<sup>Optional</sup> <a name="AlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.alertRuleId"></a>

```go
AlertRuleId MonitorActionRuleActionGroupConditionAlertRuleId
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#alert_rule_id MonitorActionRuleActionGroup#alert_rule_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.description"></a>

```go
Description MonitorActionRuleActionGroupConditionDescription
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitor"></a>

```go
Monitor MonitorActionRuleActionGroupConditionMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#monitor MonitorActionRuleActionGroup#monitor}

---

##### `MonitorService`<sup>Optional</sup> <a name="MonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.monitorService"></a>

```go
MonitorService MonitorActionRuleActionGroupConditionMonitorService
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#monitor_service MonitorActionRuleActionGroup#monitor_service}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.severity"></a>

```go
Severity MonitorActionRuleActionGroupConditionSeverity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#severity MonitorActionRuleActionGroup#severity}

---

##### `TargetResourceType`<sup>Optional</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition.property.targetResourceType"></a>

```go
TargetResourceType MonitorActionRuleActionGroupConditionTargetResourceType
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#target_resource_type MonitorActionRuleActionGroup#target_resource_type}

---

### MonitorActionRuleActionGroupConditionAlertContext <a name="MonitorActionRuleActionGroupConditionAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

&monitoractionruleactiongroup.MonitorActionRuleActionGroupConditionAlertContext {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionAlertRuleId <a name="MonitorActionRuleActionGroupConditionAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

&monitoractionruleactiongroup.MonitorActionRuleActionGroupConditionAlertRuleId {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionDescription <a name="MonitorActionRuleActionGroupConditionDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

&monitoractionruleactiongroup.MonitorActionRuleActionGroupConditionDescription {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionMonitor <a name="MonitorActionRuleActionGroupConditionMonitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

&monitoractionruleactiongroup.MonitorActionRuleActionGroupConditionMonitor {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionMonitorService <a name="MonitorActionRuleActionGroupConditionMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

&monitoractionruleactiongroup.MonitorActionRuleActionGroupConditionMonitorService {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionSeverity <a name="MonitorActionRuleActionGroupConditionSeverity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

&monitoractionruleactiongroup.MonitorActionRuleActionGroupConditionSeverity {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConditionTargetResourceType <a name="MonitorActionRuleActionGroupConditionTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

&monitoractionruleactiongroup.MonitorActionRuleActionGroupConditionTargetResourceType {
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#operator MonitorActionRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#values MonitorActionRuleActionGroup#values}.

---

### MonitorActionRuleActionGroupConfig <a name="MonitorActionRuleActionGroupConfig" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

&monitoractionruleactiongroup.MonitorActionRuleActionGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ActionGroupId: *string,
	Name: *string,
	ResourceGroupName: *string,
	Condition: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition,
	Description: *string,
	Enabled: interface{},
	Id: *string,
	Scope: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.actionGroupId">ActionGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionGroupId`<sup>Required</sup> <a name="ActionGroupId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.actionGroupId"></a>

```go
ActionGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#action_group_id MonitorActionRuleActionGroup#action_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#name MonitorActionRuleActionGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#resource_group_name MonitorActionRuleActionGroup#resource_group_name}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.condition"></a>

```go
Condition MonitorActionRuleActionGroupCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#condition MonitorActionRuleActionGroup#condition}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#description MonitorActionRuleActionGroup#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#enabled MonitorActionRuleActionGroup#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#id MonitorActionRuleActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.scope"></a>

```go
Scope MonitorActionRuleActionGroupScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#scope MonitorActionRuleActionGroup#scope}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#tags MonitorActionRuleActionGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConfig.property.timeouts"></a>

```go
Timeouts MonitorActionRuleActionGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts">MonitorActionRuleActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#timeouts MonitorActionRuleActionGroup#timeouts}

---

### MonitorActionRuleActionGroupScope <a name="MonitorActionRuleActionGroupScope" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

&monitoractionruleactiongroup.MonitorActionRuleActionGroupScope {
	ResourceIds: *[]*string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.resourceIds">ResourceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#resource_ids MonitorActionRuleActionGroup#resource_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#type MonitorActionRuleActionGroup#type}. |

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.resourceIds"></a>

```go
ResourceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#resource_ids MonitorActionRuleActionGroup#resource_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#type MonitorActionRuleActionGroup#type}.

---

### MonitorActionRuleActionGroupTimeouts <a name="MonitorActionRuleActionGroupTimeouts" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

&monitoractionruleactiongroup.MonitorActionRuleActionGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#create MonitorActionRuleActionGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#delete MonitorActionRuleActionGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#read MonitorActionRuleActionGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#update MonitorActionRuleActionGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#create MonitorActionRuleActionGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#delete MonitorActionRuleActionGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#read MonitorActionRuleActionGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/monitor_action_rule_action_group#update MonitorActionRuleActionGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorActionRuleActionGroupConditionAlertContextOutputReference <a name="MonitorActionRuleActionGroupConditionAlertContextOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.NewMonitorActionRuleActionGroupConditionAlertContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionRuleActionGroupConditionAlertContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorActionRuleActionGroupConditionAlertContext
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

---


### MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference <a name="MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.NewMonitorActionRuleActionGroupConditionAlertRuleIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorActionRuleActionGroupConditionAlertRuleId
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

---


### MonitorActionRuleActionGroupConditionDescriptionOutputReference <a name="MonitorActionRuleActionGroupConditionDescriptionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.NewMonitorActionRuleActionGroupConditionDescriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionRuleActionGroupConditionDescriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorActionRuleActionGroupConditionDescription
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

---


### MonitorActionRuleActionGroupConditionMonitorOutputReference <a name="MonitorActionRuleActionGroupConditionMonitorOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.NewMonitorActionRuleActionGroupConditionMonitorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionRuleActionGroupConditionMonitorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorActionRuleActionGroupConditionMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

---


### MonitorActionRuleActionGroupConditionMonitorServiceOutputReference <a name="MonitorActionRuleActionGroupConditionMonitorServiceOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.NewMonitorActionRuleActionGroupConditionMonitorServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionRuleActionGroupConditionMonitorServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorActionRuleActionGroupConditionMonitorService
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

---


### MonitorActionRuleActionGroupConditionOutputReference <a name="MonitorActionRuleActionGroupConditionOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.NewMonitorActionRuleActionGroupConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionRuleActionGroupConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext">PutAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId">PutAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription">PutDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor">PutMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService">PutMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity">PutSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType">PutTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertContext">ResetAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertRuleId">ResetAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitorService">ResetMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetTargetResourceType">ResetTargetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlertContext` <a name="PutAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext"></a>

```go
func PutAlertContext(value MonitorActionRuleActionGroupConditionAlertContext)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

---

##### `PutAlertRuleId` <a name="PutAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId"></a>

```go
func PutAlertRuleId(value MonitorActionRuleActionGroupConditionAlertRuleId)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putAlertRuleId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

---

##### `PutDescription` <a name="PutDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription"></a>

```go
func PutDescription(value MonitorActionRuleActionGroupConditionDescription)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putDescription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

---

##### `PutMonitor` <a name="PutMonitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor"></a>

```go
func PutMonitor(value MonitorActionRuleActionGroupConditionMonitor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

---

##### `PutMonitorService` <a name="PutMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService"></a>

```go
func PutMonitorService(value MonitorActionRuleActionGroupConditionMonitorService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putMonitorService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

---

##### `PutSeverity` <a name="PutSeverity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity"></a>

```go
func PutSeverity(value MonitorActionRuleActionGroupConditionSeverity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putSeverity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

---

##### `PutTargetResourceType` <a name="PutTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType"></a>

```go
func PutTargetResourceType(value MonitorActionRuleActionGroupConditionTargetResourceType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.putTargetResourceType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

---

##### `ResetAlertContext` <a name="ResetAlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertContext"></a>

```go
func ResetAlertContext()
```

##### `ResetAlertRuleId` <a name="ResetAlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetAlertRuleId"></a>

```go
func ResetAlertRuleId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitor"></a>

```go
func ResetMonitor()
```

##### `ResetMonitorService` <a name="ResetMonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetMonitorService"></a>

```go
func ResetMonitorService()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetSeverity"></a>

```go
func ResetSeverity()
```

##### `ResetTargetResourceType` <a name="ResetTargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.resetTargetResourceType"></a>

```go
func ResetTargetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContext">AlertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference">MonitorActionRuleActionGroupConditionAlertContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleId">AlertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference">MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.description">Description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference">MonitorActionRuleActionGroupConditionDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference">MonitorActionRuleActionGroupConditionMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorService">MonitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference">MonitorActionRuleActionGroupConditionMonitorServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severity">Severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference">MonitorActionRuleActionGroupConditionSeverityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceType">TargetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContextInput">AlertContextInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleIdInput">AlertRuleIdInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorInput">MonitorInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorServiceInput">MonitorServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severityInput">SeverityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlertContext`<sup>Required</sup> <a name="AlertContext" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContext"></a>

```go
func AlertContext() MonitorActionRuleActionGroupConditionAlertContextOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContextOutputReference">MonitorActionRuleActionGroupConditionAlertContextOutputReference</a>

---

##### `AlertRuleId`<sup>Required</sup> <a name="AlertRuleId" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleId"></a>

```go
func AlertRuleId() MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference">MonitorActionRuleActionGroupConditionAlertRuleIdOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.description"></a>

```go
func Description() MonitorActionRuleActionGroupConditionDescriptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescriptionOutputReference">MonitorActionRuleActionGroupConditionDescriptionOutputReference</a>

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitor"></a>

```go
func Monitor() MonitorActionRuleActionGroupConditionMonitorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorOutputReference">MonitorActionRuleActionGroupConditionMonitorOutputReference</a>

---

##### `MonitorService`<sup>Required</sup> <a name="MonitorService" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorService"></a>

```go
func MonitorService() MonitorActionRuleActionGroupConditionMonitorServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorServiceOutputReference">MonitorActionRuleActionGroupConditionMonitorServiceOutputReference</a>

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severity"></a>

```go
func Severity() MonitorActionRuleActionGroupConditionSeverityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference">MonitorActionRuleActionGroupConditionSeverityOutputReference</a>

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceType"></a>

```go
func TargetResourceType() MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference</a>

---

##### `AlertContextInput`<sup>Optional</sup> <a name="AlertContextInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertContextInput"></a>

```go
func AlertContextInput() MonitorActionRuleActionGroupConditionAlertContext
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertContext">MonitorActionRuleActionGroupConditionAlertContext</a>

---

##### `AlertRuleIdInput`<sup>Optional</sup> <a name="AlertRuleIdInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.alertRuleIdInput"></a>

```go
func AlertRuleIdInput() MonitorActionRuleActionGroupConditionAlertRuleId
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionAlertRuleId">MonitorActionRuleActionGroupConditionAlertRuleId</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() MonitorActionRuleActionGroupConditionDescription
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionDescription">MonitorActionRuleActionGroupConditionDescription</a>

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorInput"></a>

```go
func MonitorInput() MonitorActionRuleActionGroupConditionMonitor
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitor">MonitorActionRuleActionGroupConditionMonitor</a>

---

##### `MonitorServiceInput`<sup>Optional</sup> <a name="MonitorServiceInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.monitorServiceInput"></a>

```go
func MonitorServiceInput() MonitorActionRuleActionGroupConditionMonitorService
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionMonitorService">MonitorActionRuleActionGroupConditionMonitorService</a>

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.severityInput"></a>

```go
func SeverityInput() MonitorActionRuleActionGroupConditionSeverity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.targetResourceTypeInput"></a>

```go
func TargetResourceTypeInput() MonitorActionRuleActionGroupConditionTargetResourceType
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorActionRuleActionGroupCondition
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupCondition">MonitorActionRuleActionGroupCondition</a>

---


### MonitorActionRuleActionGroupConditionSeverityOutputReference <a name="MonitorActionRuleActionGroupConditionSeverityOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.NewMonitorActionRuleActionGroupConditionSeverityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionRuleActionGroupConditionSeverityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverityOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorActionRuleActionGroupConditionSeverity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionSeverity">MonitorActionRuleActionGroupConditionSeverity</a>

---


### MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference <a name="MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.NewMonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorActionRuleActionGroupConditionTargetResourceType
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupConditionTargetResourceType">MonitorActionRuleActionGroupConditionTargetResourceType</a>

---


### MonitorActionRuleActionGroupScopeOutputReference <a name="MonitorActionRuleActionGroupScopeOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.NewMonitorActionRuleActionGroupScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionRuleActionGroupScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIdsInput">ResourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIds">ResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceIdsInput`<sup>Optional</sup> <a name="ResourceIdsInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIdsInput"></a>

```go
func ResourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.resourceIds"></a>

```go
func ResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorActionRuleActionGroupScope
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupScope">MonitorActionRuleActionGroupScope</a>

---


### MonitorActionRuleActionGroupTimeoutsOutputReference <a name="MonitorActionRuleActionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/monitoractionruleactiongroup"

monitoractionruleactiongroup.NewMonitorActionRuleActionGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionRuleActionGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionRuleActionGroup.MonitorActionRuleActionGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



