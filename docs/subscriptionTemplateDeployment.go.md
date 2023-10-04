# `azurerm_subscription_template_deployment`

Refer to the Terraform Registory for docs: [`azurerm_subscription_template_deployment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment).

# `subscriptionTemplateDeployment` Submodule <a name="`subscriptionTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionTemplateDeployment <a name="SubscriptionTemplateDeployment" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment azurerm_subscription_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/subscriptiontemplatedeployment"

subscriptiontemplatedeployment.NewSubscriptionTemplateDeployment(scope Construct, id *string, config SubscriptionTemplateDeploymentConfig) SubscriptionTemplateDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig">SubscriptionTemplateDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig">SubscriptionTemplateDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetDebugLevel">ResetDebugLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetParametersContent">ResetParametersContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTemplateContent">ResetTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTemplateSpecVersionId">ResetTemplateSpecVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.putTimeouts"></a>

```go
func PutTimeouts(value SubscriptionTemplateDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a>

---

##### `ResetDebugLevel` <a name="ResetDebugLevel" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetDebugLevel"></a>

```go
func ResetDebugLevel()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetParametersContent` <a name="ResetParametersContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetParametersContent"></a>

```go
func ResetParametersContent()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTemplateContent` <a name="ResetTemplateContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTemplateContent"></a>

```go
func ResetTemplateContent()
```

##### `ResetTemplateSpecVersionId` <a name="ResetTemplateSpecVersionId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTemplateSpecVersionId"></a>

```go
func ResetTemplateSpecVersionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/subscriptiontemplatedeployment"

subscriptiontemplatedeployment.SubscriptionTemplateDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/subscriptiontemplatedeployment"

subscriptiontemplatedeployment.SubscriptionTemplateDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/subscriptiontemplatedeployment"

subscriptiontemplatedeployment.SubscriptionTemplateDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.outputContent">OutputContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference">SubscriptionTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevelInput">DebugLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContentInput">ParametersContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContentInput">TemplateContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionIdInput">TemplateSpecVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevel">DebugLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContent">ParametersContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContent">TemplateContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionId">TemplateSpecVersionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OutputContent`<sup>Required</sup> <a name="OutputContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.outputContent"></a>

```go
func OutputContent() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeouts"></a>

```go
func Timeouts() SubscriptionTemplateDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference">SubscriptionTemplateDeploymentTimeoutsOutputReference</a>

---

##### `DebugLevelInput`<sup>Optional</sup> <a name="DebugLevelInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevelInput"></a>

```go
func DebugLevelInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersContentInput`<sup>Optional</sup> <a name="ParametersContentInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContentInput"></a>

```go
func ParametersContentInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateContentInput`<sup>Optional</sup> <a name="TemplateContentInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContentInput"></a>

```go
func TemplateContentInput() *string
```

- *Type:* *string

---

##### `TemplateSpecVersionIdInput`<sup>Optional</sup> <a name="TemplateSpecVersionIdInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionIdInput"></a>

```go
func TemplateSpecVersionIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DebugLevel`<sup>Required</sup> <a name="DebugLevel" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevel"></a>

```go
func DebugLevel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParametersContent`<sup>Required</sup> <a name="ParametersContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContent"></a>

```go
func ParametersContent() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateContent`<sup>Required</sup> <a name="TemplateContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContent"></a>

```go
func TemplateContent() *string
```

- *Type:* *string

---

##### `TemplateSpecVersionId`<sup>Required</sup> <a name="TemplateSpecVersionId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionId"></a>

```go
func TemplateSpecVersionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionTemplateDeploymentConfig <a name="SubscriptionTemplateDeploymentConfig" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/subscriptiontemplatedeployment"

&subscriptiontemplatedeployment.SubscriptionTemplateDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	DebugLevel: *string,
	Id: *string,
	ParametersContent: *string,
	Tags: *map[string]*string,
	TemplateContent: *string,
	TemplateSpecVersionId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#location SubscriptionTemplateDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#name SubscriptionTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.debugLevel">DebugLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#debug_level SubscriptionTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#id SubscriptionTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.parametersContent">ParametersContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#parameters_content SubscriptionTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#tags SubscriptionTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateContent">TemplateContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#template_content SubscriptionTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateSpecVersionId">TemplateSpecVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#template_spec_version_id SubscriptionTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#location SubscriptionTemplateDeployment#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#name SubscriptionTemplateDeployment#name}.

---

##### `DebugLevel`<sup>Optional</sup> <a name="DebugLevel" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.debugLevel"></a>

```go
DebugLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#debug_level SubscriptionTemplateDeployment#debug_level}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#id SubscriptionTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParametersContent`<sup>Optional</sup> <a name="ParametersContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.parametersContent"></a>

```go
ParametersContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#parameters_content SubscriptionTemplateDeployment#parameters_content}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#tags SubscriptionTemplateDeployment#tags}.

---

##### `TemplateContent`<sup>Optional</sup> <a name="TemplateContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateContent"></a>

```go
TemplateContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#template_content SubscriptionTemplateDeployment#template_content}.

---

##### `TemplateSpecVersionId`<sup>Optional</sup> <a name="TemplateSpecVersionId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateSpecVersionId"></a>

```go
TemplateSpecVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#template_spec_version_id SubscriptionTemplateDeployment#template_spec_version_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.timeouts"></a>

```go
Timeouts SubscriptionTemplateDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#timeouts SubscriptionTemplateDeployment#timeouts}

---

### SubscriptionTemplateDeploymentTimeouts <a name="SubscriptionTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/subscriptiontemplatedeployment"

&subscriptiontemplatedeployment.SubscriptionTemplateDeploymentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#create SubscriptionTemplateDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#delete SubscriptionTemplateDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#read SubscriptionTemplateDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#update SubscriptionTemplateDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#create SubscriptionTemplateDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#delete SubscriptionTemplateDeployment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#read SubscriptionTemplateDeployment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/subscription_template_deployment#update SubscriptionTemplateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionTemplateDeploymentTimeoutsOutputReference <a name="SubscriptionTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/subscriptiontemplatedeployment"

subscriptiontemplatedeployment.NewSubscriptionTemplateDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SubscriptionTemplateDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



