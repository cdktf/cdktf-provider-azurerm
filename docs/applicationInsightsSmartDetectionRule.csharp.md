# `azurerm_application_insights_smart_detection_rule`

Refer to the Terraform Registory for docs: [`azurerm_application_insights_smart_detection_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule).

# `applicationInsightsSmartDetectionRule` Submodule <a name="`applicationInsightsSmartDetectionRule` Submodule" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsightsSmartDetectionRule <a name="ApplicationInsightsSmartDetectionRule" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule azurerm_application_insights_smart_detection_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsSmartDetectionRule(Construct Scope, string Id, ApplicationInsightsSmartDetectionRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig">ApplicationInsightsSmartDetectionRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationInsightsSmartDetectionRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>

---

##### `ResetAdditionalEmailRecipients` <a name="ResetAdditionalEmailRecipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetAdditionalEmailRecipients"></a>

```csharp
private void ResetAdditionalEmailRecipients()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSendEmailsToSubscriptionOwners` <a name="ResetSendEmailsToSubscriptionOwners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetSendEmailsToSubscriptionOwners"></a>

```csharp
private void ResetSendEmailsToSubscriptionOwners()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationInsightsSmartDetectionRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationInsightsSmartDetectionRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApplicationInsightsSmartDetectionRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference">ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipientsInput">AdditionalEmailRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsIdInput">ApplicationInsightsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwnersInput">SendEmailsToSubscriptionOwnersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipients">AdditionalEmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwners">SendEmailsToSubscriptionOwners</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeouts"></a>

```csharp
public ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference">ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference</a>

---

##### `AdditionalEmailRecipientsInput`<sup>Optional</sup> <a name="AdditionalEmailRecipientsInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipientsInput"></a>

```csharp
public string[] AdditionalEmailRecipientsInput { get; }
```

- *Type:* string[]

---

##### `ApplicationInsightsIdInput`<sup>Optional</sup> <a name="ApplicationInsightsIdInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsIdInput"></a>

```csharp
public string ApplicationInsightsIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SendEmailsToSubscriptionOwnersInput`<sup>Optional</sup> <a name="SendEmailsToSubscriptionOwnersInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwnersInput"></a>

```csharp
public object SendEmailsToSubscriptionOwnersInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AdditionalEmailRecipients`<sup>Required</sup> <a name="AdditionalEmailRecipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.additionalEmailRecipients"></a>

```csharp
public string[] AdditionalEmailRecipients { get; }
```

- *Type:* string[]

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.applicationInsightsId"></a>

```csharp
public string ApplicationInsightsId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SendEmailsToSubscriptionOwners`<sup>Required</sup> <a name="SendEmailsToSubscriptionOwners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.sendEmailsToSubscriptionOwners"></a>

```csharp
public object SendEmailsToSubscriptionOwners { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsSmartDetectionRuleConfig <a name="ApplicationInsightsSmartDetectionRuleConfig" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsSmartDetectionRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationInsightsId,
    string Name,
    string[] AdditionalEmailRecipients = null,
    object Enabled = null,
    string Id = null,
    object SendEmailsToSubscriptionOwners = null,
    ApplicationInsightsSmartDetectionRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.applicationInsightsId">ApplicationInsightsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#application_insights_id ApplicationInsightsSmartDetectionRule#application_insights_id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#name ApplicationInsightsSmartDetectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.additionalEmailRecipients">AdditionalEmailRecipients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#additional_email_recipients ApplicationInsightsSmartDetectionRule#additional_email_recipients}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#enabled ApplicationInsightsSmartDetectionRule#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#id ApplicationInsightsSmartDetectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.sendEmailsToSubscriptionOwners">SendEmailsToSubscriptionOwners</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#send_emails_to_subscription_owners ApplicationInsightsSmartDetectionRule#send_emails_to_subscription_owners}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationInsightsId`<sup>Required</sup> <a name="ApplicationInsightsId" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.applicationInsightsId"></a>

```csharp
public string ApplicationInsightsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#application_insights_id ApplicationInsightsSmartDetectionRule#application_insights_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#name ApplicationInsightsSmartDetectionRule#name}.

---

##### `AdditionalEmailRecipients`<sup>Optional</sup> <a name="AdditionalEmailRecipients" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.additionalEmailRecipients"></a>

```csharp
public string[] AdditionalEmailRecipients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#additional_email_recipients ApplicationInsightsSmartDetectionRule#additional_email_recipients}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#enabled ApplicationInsightsSmartDetectionRule#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#id ApplicationInsightsSmartDetectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SendEmailsToSubscriptionOwners`<sup>Optional</sup> <a name="SendEmailsToSubscriptionOwners" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.sendEmailsToSubscriptionOwners"></a>

```csharp
public object SendEmailsToSubscriptionOwners { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#send_emails_to_subscription_owners ApplicationInsightsSmartDetectionRule#send_emails_to_subscription_owners}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleConfig.property.timeouts"></a>

```csharp
public ApplicationInsightsSmartDetectionRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts">ApplicationInsightsSmartDetectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#timeouts ApplicationInsightsSmartDetectionRule#timeouts}

---

### ApplicationInsightsSmartDetectionRuleTimeouts <a name="ApplicationInsightsSmartDetectionRuleTimeouts" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsSmartDetectionRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#create ApplicationInsightsSmartDetectionRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#delete ApplicationInsightsSmartDetectionRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#read ApplicationInsightsSmartDetectionRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#update ApplicationInsightsSmartDetectionRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#create ApplicationInsightsSmartDetectionRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#delete ApplicationInsightsSmartDetectionRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#read ApplicationInsightsSmartDetectionRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/application_insights_smart_detection_rule#update ApplicationInsightsSmartDetectionRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference <a name="ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.applicationInsightsSmartDetectionRule.ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



