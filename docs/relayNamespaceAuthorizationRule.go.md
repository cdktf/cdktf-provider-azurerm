# `azurerm_relay_namespace_authorization_rule`

Refer to the Terraform Registory for docs: [`azurerm_relay_namespace_authorization_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule).

# `relayNamespaceAuthorizationRule` Submodule <a name="`relayNamespaceAuthorizationRule` Submodule" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RelayNamespaceAuthorizationRule <a name="RelayNamespaceAuthorizationRule" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule azurerm_relay_namespace_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/relaynamespaceauthorizationrule"

relaynamespaceauthorizationrule.NewRelayNamespaceAuthorizationRule(scope Construct, id *string, config RelayNamespaceAuthorizationRuleConfig) RelayNamespaceAuthorizationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig">RelayNamespaceAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig">RelayNamespaceAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetListen">ResetListen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetManage">ResetManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetSend">ResetSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.putTimeouts"></a>

```go
func PutTimeouts(value RelayNamespaceAuthorizationRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts">RelayNamespaceAuthorizationRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetId"></a>

```go
func ResetId()
```

##### `ResetListen` <a name="ResetListen" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetListen"></a>

```go
func ResetListen()
```

##### `ResetManage` <a name="ResetManage" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetManage"></a>

```go
func ResetManage()
```

##### `ResetSend` <a name="ResetSend" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetSend"></a>

```go
func ResetSend()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/relaynamespaceauthorizationrule"

relaynamespaceauthorizationrule.RelayNamespaceAuthorizationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/relaynamespaceauthorizationrule"

relaynamespaceauthorizationrule.RelayNamespaceAuthorizationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/relaynamespaceauthorizationrule"

relaynamespaceauthorizationrule.RelayNamespaceAuthorizationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.secondaryKey">SecondaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference">RelayNamespaceAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.listenInput">ListenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.manageInput">ManageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.sendInput">SendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.listen">Listen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.manage">Manage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.send">Send</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.primaryConnectionString"></a>

```go
func PrimaryConnectionString() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.secondaryConnectionString"></a>

```go
func SecondaryConnectionString() *string
```

- *Type:* *string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.secondaryKey"></a>

```go
func SecondaryKey() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.timeouts"></a>

```go
func Timeouts() RelayNamespaceAuthorizationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference">RelayNamespaceAuthorizationRuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListenInput`<sup>Optional</sup> <a name="ListenInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.listenInput"></a>

```go
func ListenInput() interface{}
```

- *Type:* interface{}

---

##### `ManageInput`<sup>Optional</sup> <a name="ManageInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.manageInput"></a>

```go
func ManageInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.namespaceNameInput"></a>

```go
func NamespaceNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SendInput`<sup>Optional</sup> <a name="SendInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.sendInput"></a>

```go
func SendInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Listen`<sup>Required</sup> <a name="Listen" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.listen"></a>

```go
func Listen() interface{}
```

- *Type:* interface{}

---

##### `Manage`<sup>Required</sup> <a name="Manage" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.manage"></a>

```go
func Manage() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Send`<sup>Required</sup> <a name="Send" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.send"></a>

```go
func Send() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RelayNamespaceAuthorizationRuleConfig <a name="RelayNamespaceAuthorizationRuleConfig" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/relaynamespaceauthorizationrule"

&relaynamespaceauthorizationrule.RelayNamespaceAuthorizationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NamespaceName: *string,
	ResourceGroupName: *string,
	Id: *string,
	Listen: interface{},
	Manage: interface{},
	Send: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#name RelayNamespaceAuthorizationRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#namespace_name RelayNamespaceAuthorizationRule#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#resource_group_name RelayNamespaceAuthorizationRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#id RelayNamespaceAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.listen">Listen</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#listen RelayNamespaceAuthorizationRule#listen}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.manage">Manage</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#manage RelayNamespaceAuthorizationRule#manage}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.send">Send</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#send RelayNamespaceAuthorizationRule#send}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts">RelayNamespaceAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#name RelayNamespaceAuthorizationRule#name}.

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.namespaceName"></a>

```go
NamespaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#namespace_name RelayNamespaceAuthorizationRule#namespace_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#resource_group_name RelayNamespaceAuthorizationRule#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#id RelayNamespaceAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Listen`<sup>Optional</sup> <a name="Listen" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.listen"></a>

```go
Listen interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#listen RelayNamespaceAuthorizationRule#listen}.

---

##### `Manage`<sup>Optional</sup> <a name="Manage" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.manage"></a>

```go
Manage interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#manage RelayNamespaceAuthorizationRule#manage}.

---

##### `Send`<sup>Optional</sup> <a name="Send" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.send"></a>

```go
Send interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#send RelayNamespaceAuthorizationRule#send}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleConfig.property.timeouts"></a>

```go
Timeouts RelayNamespaceAuthorizationRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts">RelayNamespaceAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#timeouts RelayNamespaceAuthorizationRule#timeouts}

---

### RelayNamespaceAuthorizationRuleTimeouts <a name="RelayNamespaceAuthorizationRuleTimeouts" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/relaynamespaceauthorizationrule"

&relaynamespaceauthorizationrule.RelayNamespaceAuthorizationRuleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#create RelayNamespaceAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#delete RelayNamespaceAuthorizationRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#read RelayNamespaceAuthorizationRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#update RelayNamespaceAuthorizationRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#create RelayNamespaceAuthorizationRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#delete RelayNamespaceAuthorizationRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#read RelayNamespaceAuthorizationRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/relay_namespace_authorization_rule#update RelayNamespaceAuthorizationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RelayNamespaceAuthorizationRuleTimeoutsOutputReference <a name="RelayNamespaceAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/relaynamespaceauthorizationrule"

relaynamespaceauthorizationrule.NewRelayNamespaceAuthorizationRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RelayNamespaceAuthorizationRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.relayNamespaceAuthorizationRule.RelayNamespaceAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



