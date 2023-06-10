# `azurerm_application_insights_smart_detection_rule`

Refer to the Terraform Registory for docs: [`azurerm_application_insights_smart_detection_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule).

# `applicationInsightsSmartDetectionRule` Submodule <a name="`applicationInsightsSmartDetectionRule` Submodule" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsSmartDetectionRule <a name="ApplicationInsightsSmartDetectionRule" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule azurerm_application_insights_smart_detection_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightssmartdetectionrule"

applicationinsightssmartdetectionrule.NewApplicationInsightsSmartDetectionRule(scope Construct, id *string, config ApplicationInsightsSmartDetectionRuleConfig) ApplicationInsightsSmartDetectionRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig">ApplicationInsightsSmartDetectionRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig">ApplicationInsightsSmartDetectionRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetAdditionalEmailRecipients">ResetAdditionalEmailRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetSendEmailsToSubscriptionOwners">ResetSendEmailsToSubscriptionOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts"></a>

```go
func PutTimeouts(value ApplicationInsightsSmartDetectionRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>

---

##### `ResetAdditionalEmailRecipients` <a name="ResetAdditionalEmailRecipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetAdditionalEmailRecipients"></a>

```go
func ResetAdditionalEmailRecipients()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetId"></a>

```go
func ResetId()
```

##### `ResetSendEmailsToSubscriptionOwners` <a name="ResetSendEmailsToSubscriptionOwners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetSendEmailsToSubscriptionOwners"></a>

```go
func ResetSendEmailsToSubscriptionOwners()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightssmartdetectionrule"

applicationinsightssmartdetectionrule.ApplicationInsightsSmartDetectionRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightssmartdetectionrule"

applicationinsightssmartdetectionrule.ApplicationInsightsSmartDetectionRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightssmartdetectionrule"

applicationinsightssmartdetectionrule.ApplicationInsightsSmartDetectionRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference">ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipientsInput">AdditionalEmailRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsIdInput">ApplicationInsightsIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwnersInput">SendEmailsToSubscriptionOwnersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipients">AdditionalEmailRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwners">SendEmailsToSubscriptionOwners</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeouts"></a>

```go
func Timeouts() ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference">ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference</a>

---

##### `AdditionalEmailRecipientsInput`<sup>Optional</sup> <a name="AdditionalEmailRecipientsInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipientsInput"></a>

```go
func AdditionalEmailRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationInsightsIdInput`<sup>Optional</sup> <a name="ApplicationInsightsIdInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsIdInput"></a>

```go
func ApplicationInsightsIdInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SendEmailsToSubscriptionOwnersInput`<sup>Optional</sup> <a name="SendEmailsToSubscriptionOwnersInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwnersInput"></a>

```go
func SendEmailsToSubscriptionOwnersInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalEmailRecipients`<sup>Required</sup> <a name="AdditionalEmailRecipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipients"></a>

```go
func AdditionalEmailRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsId"></a>

```go
func ApplicationInsightsId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SendEmailsToSubscriptionOwners`<sup>Required</sup> <a name="SendEmailsToSubscriptionOwners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwners"></a>

```go
func SendEmailsToSubscriptionOwners() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsSmartDetectionRuleConfig <a name="ApplicationInsightsSmartDetectionRuleConfig" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightssmartdetectionrule"

&applicationinsightssmartdetectionrule.ApplicationInsightsSmartDetectionRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationInsightsId: *string,
	Name: *string,
	AdditionalEmailRecipients: *[]*string,
	Enabled: interface{},
	Id: *string,
	SendEmailsToSubscriptionOwners: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#application_insights_id ApplicationInsightsSmartDetectionRule#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#name ApplicationInsightsSmartDetectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.additionalEmailRecipients">AdditionalEmailRecipients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#additional_email_recipients ApplicationInsightsSmartDetectionRule#additional_email_recipients}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#enabled ApplicationInsightsSmartDetectionRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#id ApplicationInsightsSmartDetectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.sendEmailsToSubscriptionOwners">SendEmailsToSubscriptionOwners</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#send_emails_to_subscription_owners ApplicationInsightsSmartDetectionRule#send_emails_to_subscription_owners}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.applicationInsightsId"></a>

```go
ApplicationInsightsId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#application_insights_id ApplicationInsightsSmartDetectionRule#application_insights_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#name ApplicationInsightsSmartDetectionRule#name}.

---

##### `AdditionalEmailRecipients`<sup>Optional</sup> <a name="AdditionalEmailRecipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.additionalEmailRecipients"></a>

```go
AdditionalEmailRecipients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#additional_email_recipients ApplicationInsightsSmartDetectionRule#additional_email_recipients}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#enabled ApplicationInsightsSmartDetectionRule#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#id ApplicationInsightsSmartDetectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SendEmailsToSubscriptionOwners`<sup>Optional</sup> <a name="SendEmailsToSubscriptionOwners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.sendEmailsToSubscriptionOwners"></a>

```go
SendEmailsToSubscriptionOwners interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#send_emails_to_subscription_owners ApplicationInsightsSmartDetectionRule#send_emails_to_subscription_owners}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.timeouts"></a>

```go
Timeouts ApplicationInsightsSmartDetectionRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#timeouts ApplicationInsightsSmartDetectionRule#timeouts}

---

### ApplicationInsightsSmartDetectionRuleTimeouts <a name="ApplicationInsightsSmartDetectionRuleTimeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightssmartdetectionrule"

&applicationinsightssmartdetectionrule.ApplicationInsightsSmartDetectionRuleTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#create ApplicationInsightsSmartDetectionRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#delete ApplicationInsightsSmartDetectionRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#read ApplicationInsightsSmartDetectionRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#update ApplicationInsightsSmartDetectionRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#create ApplicationInsightsSmartDetectionRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#delete ApplicationInsightsSmartDetectionRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#read ApplicationInsightsSmartDetectionRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/application_insights_smart_detection_rule#update ApplicationInsightsSmartDetectionRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference <a name="ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/applicationinsightssmartdetectionrule"

applicationinsightssmartdetectionrule.NewApplicationInsightsSmartDetectionRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



