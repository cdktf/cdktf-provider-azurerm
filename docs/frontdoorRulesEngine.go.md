# `azurerm_frontdoor_rules_engine`

Refer to the Terraform Registory for docs: [`azurerm_frontdoor_rules_engine`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine).

# `frontdoorRulesEngine` Submodule <a name="`frontdoorRulesEngine` Submodule" id="@cdktf/provider-azurerm.frontdoorRulesEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrontdoorRulesEngine <a name="FrontdoorRulesEngine" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine azurerm_frontdoor_rules_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.NewFrontdoorRulesEngine(scope Construct, id *string, config FrontdoorRulesEngineConfig) FrontdoorRulesEngine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig">FrontdoorRulesEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig">FrontdoorRulesEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts"></a>

```go
func PutTimeouts(value FrontdoorRulesEngineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetId"></a>

```go
func ResetId()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetRule"></a>

```go
func ResetRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.FrontdoorRulesEngine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.FrontdoorRulesEngine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.FrontdoorRulesEngine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList">FrontdoorRulesEngineRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference">FrontdoorRulesEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorNameInput">FrontdoorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorName">FrontdoorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.rule"></a>

```go
func Rule() FrontdoorRulesEngineRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList">FrontdoorRulesEngineRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeouts"></a>

```go
func Timeouts() FrontdoorRulesEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference">FrontdoorRulesEngineTimeoutsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FrontdoorNameInput`<sup>Optional</sup> <a name="FrontdoorNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorNameInput"></a>

```go
func FrontdoorNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FrontdoorName`<sup>Required</sup> <a name="FrontdoorName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorName"></a>

```go
func FrontdoorName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorRulesEngineConfig <a name="FrontdoorRulesEngineConfig" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

&frontdoorrulesengine.FrontdoorRulesEngineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FrontdoorName: *string,
	Name: *string,
	ResourceGroupName: *string,
	Enabled: interface{},
	Id: *string,
	Rule: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.frontdoorName">FrontdoorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#frontdoor_name FrontdoorRulesEngine#frontdoor_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#resource_group_name FrontdoorRulesEngine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#enabled FrontdoorRulesEngine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#id FrontdoorRulesEngine#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FrontdoorName`<sup>Required</sup> <a name="FrontdoorName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.frontdoorName"></a>

```go
FrontdoorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#frontdoor_name FrontdoorRulesEngine#frontdoor_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#resource_group_name FrontdoorRulesEngine#resource_group_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#enabled FrontdoorRulesEngine#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#id FrontdoorRulesEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#rule FrontdoorRulesEngine#rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.timeouts"></a>

```go
Timeouts FrontdoorRulesEngineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#timeouts FrontdoorRulesEngine#timeouts}

---

### FrontdoorRulesEngineRule <a name="FrontdoorRulesEngineRule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

&frontdoorrulesengine.FrontdoorRulesEngineRule {
	Name: *string,
	Priority: *f64,
	Action: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction,
	MatchCondition: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#priority FrontdoorRulesEngine#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.matchCondition">MatchCondition</a></code> | <code>interface{}</code> | match_condition block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#priority FrontdoorRulesEngine#priority}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.action"></a>

```go
Action FrontdoorRulesEngineRuleAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#action FrontdoorRulesEngine#action}

---

##### `MatchCondition`<sup>Optional</sup> <a name="MatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.matchCondition"></a>

```go
MatchCondition interface{}
```

- *Type:* interface{}

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#match_condition FrontdoorRulesEngine#match_condition}

---

### FrontdoorRulesEngineRuleAction <a name="FrontdoorRulesEngineRuleAction" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

&frontdoorrulesengine.FrontdoorRulesEngineRuleAction {
	RequestHeader: interface{},
	ResponseHeader: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.requestHeader">RequestHeader</a></code> | <code>interface{}</code> | request_header block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.responseHeader">ResponseHeader</a></code> | <code>interface{}</code> | response_header block. |

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.requestHeader"></a>

```go
RequestHeader interface{}
```

- *Type:* interface{}

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#request_header FrontdoorRulesEngine#request_header}

---

##### `ResponseHeader`<sup>Optional</sup> <a name="ResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.responseHeader"></a>

```go
ResponseHeader interface{}
```

- *Type:* interface{}

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#response_header FrontdoorRulesEngine#response_header}

---

### FrontdoorRulesEngineRuleActionRequestHeader <a name="FrontdoorRulesEngineRuleActionRequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

&frontdoorrulesengine.FrontdoorRulesEngineRuleActionRequestHeader {
	HeaderActionType: *string,
	HeaderName: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerActionType">HeaderActionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerName">HeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |

---

##### `HeaderActionType`<sup>Optional</sup> <a name="HeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerActionType"></a>

```go
HeaderActionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}.

---

##### `HeaderName`<sup>Optional</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

### FrontdoorRulesEngineRuleActionResponseHeader <a name="FrontdoorRulesEngineRuleActionResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

&frontdoorrulesengine.FrontdoorRulesEngineRuleActionResponseHeader {
	HeaderActionType: *string,
	HeaderName: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerActionType">HeaderActionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerName">HeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |

---

##### `HeaderActionType`<sup>Optional</sup> <a name="HeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerActionType"></a>

```go
HeaderActionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}.

---

##### `HeaderName`<sup>Optional</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

### FrontdoorRulesEngineRuleMatchCondition <a name="FrontdoorRulesEngineRuleMatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

&frontdoorrulesengine.FrontdoorRulesEngineRuleMatchCondition {
	Operator: *string,
	NegateCondition: interface{},
	Selector: *string,
	Transform: *[]*string,
	Value: *[]*string,
	Variable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#operator FrontdoorRulesEngine#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#negate_condition FrontdoorRulesEngine#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.selector">Selector</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#selector FrontdoorRulesEngine#selector}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.transform">Transform</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#transform FrontdoorRulesEngine#transform}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.value">Value</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.variable">Variable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#variable FrontdoorRulesEngine#variable}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#operator FrontdoorRulesEngine#operator}.

---

##### `NegateCondition`<sup>Optional</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.negateCondition"></a>

```go
NegateCondition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#negate_condition FrontdoorRulesEngine#negate_condition}.

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.selector"></a>

```go
Selector *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#selector FrontdoorRulesEngine#selector}.

---

##### `Transform`<sup>Optional</sup> <a name="Transform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.transform"></a>

```go
Transform *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#transform FrontdoorRulesEngine#transform}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.value"></a>

```go
Value *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.variable"></a>

```go
Variable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#variable FrontdoorRulesEngine#variable}.

---

### FrontdoorRulesEngineTimeouts <a name="FrontdoorRulesEngineTimeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

&frontdoorrulesengine.FrontdoorRulesEngineTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#create FrontdoorRulesEngine#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#delete FrontdoorRulesEngine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#read FrontdoorRulesEngine#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#update FrontdoorRulesEngine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#create FrontdoorRulesEngine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#delete FrontdoorRulesEngine#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#read FrontdoorRulesEngine#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/frontdoor_rules_engine#update FrontdoorRulesEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorRulesEngineRuleActionOutputReference <a name="FrontdoorRulesEngineRuleActionOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.NewFrontdoorRulesEngineRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FrontdoorRulesEngineRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader">PutResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetResponseHeader">ResetResponseHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader"></a>

```go
func PutRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResponseHeader` <a name="PutResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader"></a>

```go
func PutResponseHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetRequestHeader"></a>

```go
func ResetRequestHeader()
```

##### `ResetResponseHeader` <a name="ResetResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetResponseHeader"></a>

```go
func ResetResponseHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList">FrontdoorRulesEngineRuleActionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeader">ResponseHeader</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList">FrontdoorRulesEngineRuleActionResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeaderInput">ResponseHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeader"></a>

```go
func RequestHeader() FrontdoorRulesEngineRuleActionRequestHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList">FrontdoorRulesEngineRuleActionRequestHeaderList</a>

---

##### `ResponseHeader`<sup>Required</sup> <a name="ResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeader"></a>

```go
func ResponseHeader() FrontdoorRulesEngineRuleActionResponseHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList">FrontdoorRulesEngineRuleActionResponseHeaderList</a>

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeaderInput"></a>

```go
func RequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `ResponseHeaderInput`<sup>Optional</sup> <a name="ResponseHeaderInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeaderInput"></a>

```go
func ResponseHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() FrontdoorRulesEngineRuleAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

---


### FrontdoorRulesEngineRuleActionRequestHeaderList <a name="FrontdoorRulesEngineRuleActionRequestHeaderList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.NewFrontdoorRulesEngineRuleActionRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorRulesEngineRuleActionRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get"></a>

```go
func Get(index *f64) FrontdoorRulesEngineRuleActionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorRulesEngineRuleActionRequestHeaderOutputReference <a name="FrontdoorRulesEngineRuleActionRequestHeaderOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.NewFrontdoorRulesEngineRuleActionRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorRulesEngineRuleActionRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderActionType">ResetHeaderActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderName">ResetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderActionType` <a name="ResetHeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderActionType"></a>

```go
func ResetHeaderActionType()
```

##### `ResetHeaderName` <a name="ResetHeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderName"></a>

```go
func ResetHeaderName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionTypeInput">HeaderActionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionType">HeaderActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderActionTypeInput`<sup>Optional</sup> <a name="HeaderActionTypeInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionTypeInput"></a>

```go
func HeaderActionTypeInput() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `HeaderActionType`<sup>Required</sup> <a name="HeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionType"></a>

```go
func HeaderActionType() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorRulesEngineRuleActionResponseHeaderList <a name="FrontdoorRulesEngineRuleActionResponseHeaderList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.NewFrontdoorRulesEngineRuleActionResponseHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorRulesEngineRuleActionResponseHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get"></a>

```go
func Get(index *f64) FrontdoorRulesEngineRuleActionResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorRulesEngineRuleActionResponseHeaderOutputReference <a name="FrontdoorRulesEngineRuleActionResponseHeaderOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.NewFrontdoorRulesEngineRuleActionResponseHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorRulesEngineRuleActionResponseHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderActionType">ResetHeaderActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderName">ResetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderActionType` <a name="ResetHeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderActionType"></a>

```go
func ResetHeaderActionType()
```

##### `ResetHeaderName` <a name="ResetHeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderName"></a>

```go
func ResetHeaderName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionTypeInput">HeaderActionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionType">HeaderActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderActionTypeInput`<sup>Optional</sup> <a name="HeaderActionTypeInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionTypeInput"></a>

```go
func HeaderActionTypeInput() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `HeaderActionType`<sup>Required</sup> <a name="HeaderActionType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionType"></a>

```go
func HeaderActionType() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorRulesEngineRuleList <a name="FrontdoorRulesEngineRuleList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.NewFrontdoorRulesEngineRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorRulesEngineRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get"></a>

```go
func Get(index *f64) FrontdoorRulesEngineRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorRulesEngineRuleMatchConditionList <a name="FrontdoorRulesEngineRuleMatchConditionList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.NewFrontdoorRulesEngineRuleMatchConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FrontdoorRulesEngineRuleMatchConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get"></a>

```go
func Get(index *f64) FrontdoorRulesEngineRuleMatchConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorRulesEngineRuleMatchConditionOutputReference <a name="FrontdoorRulesEngineRuleMatchConditionOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.NewFrontdoorRulesEngineRuleMatchConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorRulesEngineRuleMatchConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetNegateCondition">ResetNegateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetTransform">ResetTransform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNegateCondition` <a name="ResetNegateCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetNegateCondition"></a>

```go
func ResetNegateCondition()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetSelector"></a>

```go
func ResetSelector()
```

##### `ResetTransform` <a name="ResetTransform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetTransform"></a>

```go
func ResetTransform()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetVariable"></a>

```go
func ResetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateConditionInput">NegateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selectorInput">SelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transformInput">TransformInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.valueInput">ValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variableInput">VariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateCondition">NegateCondition</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selector">Selector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transform">Transform</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.value">Value</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NegateConditionInput`<sup>Optional</sup> <a name="NegateConditionInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateConditionInput"></a>

```go
func NegateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selectorInput"></a>

```go
func SelectorInput() *string
```

- *Type:* *string

---

##### `TransformInput`<sup>Optional</sup> <a name="TransformInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transformInput"></a>

```go
func TransformInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.valueInput"></a>

```go
func ValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variableInput"></a>

```go
func VariableInput() *string
```

- *Type:* *string

---

##### `NegateCondition`<sup>Required</sup> <a name="NegateCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateCondition"></a>

```go
func NegateCondition() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selector"></a>

```go
func Selector() *string
```

- *Type:* *string

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transform"></a>

```go
func Transform() *[]*string
```

- *Type:* *[]*string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.value"></a>

```go
func Value() *[]*string
```

- *Type:* *[]*string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorRulesEngineRuleOutputReference <a name="FrontdoorRulesEngineRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.NewFrontdoorRulesEngineRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FrontdoorRulesEngineRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition">PutMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetMatchCondition">ResetMatchCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction"></a>

```go
func PutAction(value FrontdoorRulesEngineRuleAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

---

##### `PutMatchCondition` <a name="PutMatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition"></a>

```go
func PutMatchCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetMatchCondition` <a name="ResetMatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetMatchCondition"></a>

```go
func ResetMatchCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference">FrontdoorRulesEngineRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList">FrontdoorRulesEngineRuleMatchConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchConditionInput">MatchConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.action"></a>

```go
func Action() FrontdoorRulesEngineRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference">FrontdoorRulesEngineRuleActionOutputReference</a>

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchCondition"></a>

```go
func MatchCondition() FrontdoorRulesEngineRuleMatchConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList">FrontdoorRulesEngineRuleMatchConditionList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() FrontdoorRulesEngineRuleAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

---

##### `MatchConditionInput`<sup>Optional</sup> <a name="MatchConditionInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchConditionInput"></a>

```go
func MatchConditionInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FrontdoorRulesEngineTimeoutsOutputReference <a name="FrontdoorRulesEngineTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/frontdoorrulesengine"

frontdoorrulesengine.NewFrontdoorRulesEngineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FrontdoorRulesEngineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



