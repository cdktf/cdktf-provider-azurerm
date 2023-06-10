# `azurerm_subscription_template_deployment`

Refer to the Terraform Registory for docs: [`azurerm_subscription_template_deployment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment).

# `subscriptionTemplateDeployment` Submodule <a name="`subscriptionTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionTemplateDeployment <a name="SubscriptionTemplateDeployment" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment azurerm_subscription_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionTemplateDeployment(Construct Scope, string Id, SubscriptionTemplateDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig">SubscriptionTemplateDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(SubscriptionTemplateDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a>

---

##### `ResetDebugLevel` <a name="ResetDebugLevel" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetDebugLevel"></a>

```csharp
private void ResetDebugLevel()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParametersContent` <a name="ResetParametersContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetParametersContent"></a>

```csharp
private void ResetParametersContent()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplateContent` <a name="ResetTemplateContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTemplateContent"></a>

```csharp
private void ResetTemplateContent()
```

##### `ResetTemplateSpecVersionId` <a name="ResetTemplateSpecVersionId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTemplateSpecVersionId"></a>

```csharp
private void ResetTemplateSpecVersionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SubscriptionTemplateDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SubscriptionTemplateDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SubscriptionTemplateDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.outputContent">OutputContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference">SubscriptionTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevelInput">DebugLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContentInput">ParametersContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContentInput">TemplateContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionIdInput">TemplateSpecVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevel">DebugLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContent">ParametersContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContent">TemplateContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionId">TemplateSpecVersionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `OutputContent`<sup>Required</sup> <a name="OutputContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.outputContent"></a>

```csharp
public string OutputContent { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeouts"></a>

```csharp
public SubscriptionTemplateDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference">SubscriptionTemplateDeploymentTimeoutsOutputReference</a>

---

##### `DebugLevelInput`<sup>Optional</sup> <a name="DebugLevelInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevelInput"></a>

```csharp
public string DebugLevelInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersContentInput`<sup>Optional</sup> <a name="ParametersContentInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContentInput"></a>

```csharp
public string ParametersContentInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateContentInput`<sup>Optional</sup> <a name="TemplateContentInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContentInput"></a>

```csharp
public string TemplateContentInput { get; }
```

- *Type:* string

---

##### `TemplateSpecVersionIdInput`<sup>Optional</sup> <a name="TemplateSpecVersionIdInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionIdInput"></a>

```csharp
public string TemplateSpecVersionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DebugLevel`<sup>Required</sup> <a name="DebugLevel" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.debugLevel"></a>

```csharp
public string DebugLevel { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParametersContent`<sup>Required</sup> <a name="ParametersContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.parametersContent"></a>

```csharp
public string ParametersContent { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TemplateContent`<sup>Required</sup> <a name="TemplateContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateContent"></a>

```csharp
public string TemplateContent { get; }
```

- *Type:* string

---

##### `TemplateSpecVersionId`<sup>Required</sup> <a name="TemplateSpecVersionId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.templateSpecVersionId"></a>

```csharp
public string TemplateSpecVersionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionTemplateDeploymentConfig <a name="SubscriptionTemplateDeploymentConfig" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionTemplateDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string DebugLevel = null,
    string Id = null,
    string ParametersContent = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string TemplateContent = null,
    string TemplateSpecVersionId = null,
    SubscriptionTemplateDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#location SubscriptionTemplateDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#name SubscriptionTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.debugLevel">DebugLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#debug_level SubscriptionTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#id SubscriptionTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.parametersContent">ParametersContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#parameters_content SubscriptionTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#tags SubscriptionTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateContent">TemplateContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#template_content SubscriptionTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateSpecVersionId">TemplateSpecVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#template_spec_version_id SubscriptionTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#location SubscriptionTemplateDeployment#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#name SubscriptionTemplateDeployment#name}.

---

##### `DebugLevel`<sup>Optional</sup> <a name="DebugLevel" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.debugLevel"></a>

```csharp
public string DebugLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#debug_level SubscriptionTemplateDeployment#debug_level}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#id SubscriptionTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParametersContent`<sup>Optional</sup> <a name="ParametersContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.parametersContent"></a>

```csharp
public string ParametersContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#parameters_content SubscriptionTemplateDeployment#parameters_content}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#tags SubscriptionTemplateDeployment#tags}.

---

##### `TemplateContent`<sup>Optional</sup> <a name="TemplateContent" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateContent"></a>

```csharp
public string TemplateContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#template_content SubscriptionTemplateDeployment#template_content}.

---

##### `TemplateSpecVersionId`<sup>Optional</sup> <a name="TemplateSpecVersionId" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.templateSpecVersionId"></a>

```csharp
public string TemplateSpecVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#template_spec_version_id SubscriptionTemplateDeployment#template_spec_version_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentConfig.property.timeouts"></a>

```csharp
public SubscriptionTemplateDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts">SubscriptionTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#timeouts SubscriptionTemplateDeployment#timeouts}

---

### SubscriptionTemplateDeploymentTimeouts <a name="SubscriptionTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionTemplateDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#create SubscriptionTemplateDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#delete SubscriptionTemplateDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#read SubscriptionTemplateDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#update SubscriptionTemplateDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#create SubscriptionTemplateDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#delete SubscriptionTemplateDeployment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#read SubscriptionTemplateDeployment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/subscription_template_deployment#update SubscriptionTemplateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionTemplateDeploymentTimeoutsOutputReference <a name="SubscriptionTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionTemplateDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionTemplateDeployment.SubscriptionTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



