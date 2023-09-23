# `azurerm_iot_security_solution`

Refer to the Terraform Registory for docs: [`azurerm_iot_security_solution`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution).

# `iotSecuritySolution` Submodule <a name="`iotSecuritySolution` Submodule" id="@cdktf/provider-azurerm.iotSecuritySolution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecuritySolution <a name="IotSecuritySolution" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution azurerm_iot_security_solution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotSecuritySolution(Construct Scope, string Id, IotSecuritySolutionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig">IotSecuritySolutionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig">IotSecuritySolutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace">PutAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled">PutRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace">ResetAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources">ResetDisabledDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport">ResetEventsToExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId">ResetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled">ResetLogUnmaskedIpsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources">ResetQueryForResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds">ResetQuerySubscriptionIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendationsEnabled">ResetRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAdditionalWorkspace` <a name="PutAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace"></a>

```csharp
private void PutAdditionalWorkspace(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace.parameter.value"></a>

- *Type:* object

---

##### `PutRecommendationsEnabled` <a name="PutRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled"></a>

```csharp
private void PutRecommendationsEnabled(IotSecuritySolutionRecommendationsEnabled Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts"></a>

```csharp
private void PutTimeouts(IotSecuritySolutionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---

##### `ResetAdditionalWorkspace` <a name="ResetAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace"></a>

```csharp
private void ResetAdditionalWorkspace()
```

##### `ResetDisabledDataSources` <a name="ResetDisabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources"></a>

```csharp
private void ResetDisabledDataSources()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEventsToExport` <a name="ResetEventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport"></a>

```csharp
private void ResetEventsToExport()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogAnalyticsWorkspaceId` <a name="ResetLogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId"></a>

```csharp
private void ResetLogAnalyticsWorkspaceId()
```

##### `ResetLogUnmaskedIpsEnabled` <a name="ResetLogUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled"></a>

```csharp
private void ResetLogUnmaskedIpsEnabled()
```

##### `ResetQueryForResources` <a name="ResetQueryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources"></a>

```csharp
private void ResetQueryForResources()
```

##### `ResetQuerySubscriptionIds` <a name="ResetQuerySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds"></a>

```csharp
private void ResetQuerySubscriptionIds()
```

##### `ResetRecommendationsEnabled` <a name="ResetRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendationsEnabled"></a>

```csharp
private void ResetRecommendationsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotSecuritySolution.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotSecuritySolution.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotSecuritySolution.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace">AdditionalWorkspace</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabled">RecommendationsEnabled</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference">IotSecuritySolutionRecommendationsEnabledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput">AdditionalWorkspaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput">DisabledDataSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput">EventsToExportInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput">IothubIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput">LogUnmaskedIpsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput">QueryForResourcesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput">QuerySubscriptionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabledInput">RecommendationsEnabledInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources">DisabledDataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport">EventsToExport</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds">IothubIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled">LogUnmaskedIpsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources">QueryForResources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds">QuerySubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalWorkspace`<sup>Required</sup> <a name="AdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace"></a>

```csharp
public IotSecuritySolutionAdditionalWorkspaceList AdditionalWorkspace { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a>

---

##### `RecommendationsEnabled`<sup>Required</sup> <a name="RecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabled"></a>

```csharp
public IotSecuritySolutionRecommendationsEnabledOutputReference RecommendationsEnabled { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference">IotSecuritySolutionRecommendationsEnabledOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts"></a>

```csharp
public IotSecuritySolutionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a>

---

##### `AdditionalWorkspaceInput`<sup>Optional</sup> <a name="AdditionalWorkspaceInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput"></a>

```csharp
public object AdditionalWorkspaceInput { get; }
```

- *Type:* object

---

##### `DisabledDataSourcesInput`<sup>Optional</sup> <a name="DisabledDataSourcesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput"></a>

```csharp
public string[] DisabledDataSourcesInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EventsToExportInput`<sup>Optional</sup> <a name="EventsToExportInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput"></a>

```csharp
public string[] EventsToExportInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IothubIdsInput`<sup>Optional</sup> <a name="IothubIdsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput"></a>

```csharp
public string[] IothubIdsInput { get; }
```

- *Type:* string[]

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `LogUnmaskedIpsEnabledInput`<sup>Optional</sup> <a name="LogUnmaskedIpsEnabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput"></a>

```csharp
public object LogUnmaskedIpsEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryForResourcesInput`<sup>Optional</sup> <a name="QueryForResourcesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput"></a>

```csharp
public string QueryForResourcesInput { get; }
```

- *Type:* string

---

##### `QuerySubscriptionIdsInput`<sup>Optional</sup> <a name="QuerySubscriptionIdsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput"></a>

```csharp
public string[] QuerySubscriptionIdsInput { get; }
```

- *Type:* string[]

---

##### `RecommendationsEnabledInput`<sup>Optional</sup> <a name="RecommendationsEnabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabledInput"></a>

```csharp
public IotSecuritySolutionRecommendationsEnabled RecommendationsEnabledInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisabledDataSources`<sup>Required</sup> <a name="DisabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources"></a>

```csharp
public string[] DisabledDataSources { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EventsToExport`<sup>Required</sup> <a name="EventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport"></a>

```csharp
public string[] EventsToExport { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IothubIds`<sup>Required</sup> <a name="IothubIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds"></a>

```csharp
public string[] IothubIds { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `LogUnmaskedIpsEnabled`<sup>Required</sup> <a name="LogUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled"></a>

```csharp
public object LogUnmaskedIpsEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QueryForResources`<sup>Required</sup> <a name="QueryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources"></a>

```csharp
public string QueryForResources { get; }
```

- *Type:* string

---

##### `QuerySubscriptionIds`<sup>Required</sup> <a name="QuerySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds"></a>

```csharp
public string[] QuerySubscriptionIds { get; }
```

- *Type:* string[]

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecuritySolutionAdditionalWorkspace <a name="IotSecuritySolutionAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotSecuritySolutionAdditionalWorkspace {
    string[] DataTypes,
    string WorkspaceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes">DataTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}. |

---

##### `DataTypes`<sup>Required</sup> <a name="DataTypes" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes"></a>

```csharp
public string[] DataTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}.

---

### IotSecuritySolutionConfig <a name="IotSecuritySolutionConfig" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotSecuritySolutionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string[] IothubIds,
    string Location,
    string Name,
    string ResourceGroupName,
    object AdditionalWorkspace = null,
    string[] DisabledDataSources = null,
    object Enabled = null,
    string[] EventsToExport = null,
    string Id = null,
    string LogAnalyticsWorkspaceId = null,
    object LogUnmaskedIpsEnabled = null,
    string QueryForResources = null,
    string[] QuerySubscriptionIds = null,
    IotSecuritySolutionRecommendationsEnabled RecommendationsEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IotSecuritySolutionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds">IothubIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace">AdditionalWorkspace</a></code> | <code>object</code> | additional_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources">DisabledDataSources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport">EventsToExport</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled">LogUnmaskedIpsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources">QueryForResources</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds">QuerySubscriptionIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendationsEnabled">RecommendationsEnabled</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | recommendations_enabled block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}.

---

##### `IothubIds`<sup>Required</sup> <a name="IothubIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds"></a>

```csharp
public string[] IothubIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}.

---

##### `AdditionalWorkspace`<sup>Optional</sup> <a name="AdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace"></a>

```csharp
public object AdditionalWorkspace { get; set; }
```

- *Type:* object

additional_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#additional_workspace IotSecuritySolution#additional_workspace}

---

##### `DisabledDataSources`<sup>Optional</sup> <a name="DisabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources"></a>

```csharp
public string[] DisabledDataSources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}.

---

##### `EventsToExport`<sup>Optional</sup> <a name="EventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport"></a>

```csharp
public string[] EventsToExport { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogAnalyticsWorkspaceId`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}.

---

##### `LogUnmaskedIpsEnabled`<sup>Optional</sup> <a name="LogUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled"></a>

```csharp
public object LogUnmaskedIpsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}.

---

##### `QueryForResources`<sup>Optional</sup> <a name="QueryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources"></a>

```csharp
public string QueryForResources { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}.

---

##### `QuerySubscriptionIds`<sup>Optional</sup> <a name="QuerySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds"></a>

```csharp
public string[] QuerySubscriptionIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}.

---

##### `RecommendationsEnabled`<sup>Optional</sup> <a name="RecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendationsEnabled"></a>

```csharp
public IotSecuritySolutionRecommendationsEnabled RecommendationsEnabled { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

recommendations_enabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#recommendations_enabled IotSecuritySolution#recommendations_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts"></a>

```csharp
public IotSecuritySolutionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#timeouts IotSecuritySolution#timeouts}

---

### IotSecuritySolutionRecommendationsEnabled <a name="IotSecuritySolutionRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotSecuritySolutionRecommendationsEnabled {
    object AcrAuthentication = null,
    object AgentSendUnutilizedMsg = null,
    object Baseline = null,
    object EdgeHubMemOptimize = null,
    object EdgeLoggingOption = null,
    object InconsistentModuleSettings = null,
    object InstallAgent = null,
    object IpFilterDenyAll = null,
    object IpFilterPermissiveRule = null,
    object OpenPorts = null,
    object PermissiveFirewallPolicy = null,
    object PermissiveInputFirewallRules = null,
    object PermissiveOutputFirewallRules = null,
    object PrivilegedDockerOptions = null,
    object SharedCredentials = null,
    object VulnerableTlsCipherSuite = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.acrAuthentication">AcrAuthentication</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.agentSendUnutilizedMsg">AgentSendUnutilizedMsg</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.baseline">Baseline</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeHubMemOptimize">EdgeHubMemOptimize</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeLoggingOption">EdgeLoggingOption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.inconsistentModuleSettings">InconsistentModuleSettings</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.installAgent">InstallAgent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterDenyAll">IpFilterDenyAll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterPermissiveRule">IpFilterPermissiveRule</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.openPorts">OpenPorts</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveFirewallPolicy">PermissiveFirewallPolicy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveInputFirewallRules">PermissiveInputFirewallRules</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveOutputFirewallRules">PermissiveOutputFirewallRules</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.privilegedDockerOptions">PrivilegedDockerOptions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.sharedCredentials">SharedCredentials</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.vulnerableTlsCipherSuite">VulnerableTlsCipherSuite</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}. |

---

##### `AcrAuthentication`<sup>Optional</sup> <a name="AcrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.acrAuthentication"></a>

```csharp
public object AcrAuthentication { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}.

---

##### `AgentSendUnutilizedMsg`<sup>Optional</sup> <a name="AgentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.agentSendUnutilizedMsg"></a>

```csharp
public object AgentSendUnutilizedMsg { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}.

---

##### `Baseline`<sup>Optional</sup> <a name="Baseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.baseline"></a>

```csharp
public object Baseline { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}.

---

##### `EdgeHubMemOptimize`<sup>Optional</sup> <a name="EdgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeHubMemOptimize"></a>

```csharp
public object EdgeHubMemOptimize { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}.

---

##### `EdgeLoggingOption`<sup>Optional</sup> <a name="EdgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeLoggingOption"></a>

```csharp
public object EdgeLoggingOption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}.

---

##### `InconsistentModuleSettings`<sup>Optional</sup> <a name="InconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.inconsistentModuleSettings"></a>

```csharp
public object InconsistentModuleSettings { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}.

---

##### `InstallAgent`<sup>Optional</sup> <a name="InstallAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.installAgent"></a>

```csharp
public object InstallAgent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}.

---

##### `IpFilterDenyAll`<sup>Optional</sup> <a name="IpFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterDenyAll"></a>

```csharp
public object IpFilterDenyAll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}.

---

##### `IpFilterPermissiveRule`<sup>Optional</sup> <a name="IpFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterPermissiveRule"></a>

```csharp
public object IpFilterPermissiveRule { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}.

---

##### `OpenPorts`<sup>Optional</sup> <a name="OpenPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.openPorts"></a>

```csharp
public object OpenPorts { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}.

---

##### `PermissiveFirewallPolicy`<sup>Optional</sup> <a name="PermissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveFirewallPolicy"></a>

```csharp
public object PermissiveFirewallPolicy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}.

---

##### `PermissiveInputFirewallRules`<sup>Optional</sup> <a name="PermissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveInputFirewallRules"></a>

```csharp
public object PermissiveInputFirewallRules { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}.

---

##### `PermissiveOutputFirewallRules`<sup>Optional</sup> <a name="PermissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveOutputFirewallRules"></a>

```csharp
public object PermissiveOutputFirewallRules { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}.

---

##### `PrivilegedDockerOptions`<sup>Optional</sup> <a name="PrivilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.privilegedDockerOptions"></a>

```csharp
public object PrivilegedDockerOptions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}.

---

##### `SharedCredentials`<sup>Optional</sup> <a name="SharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.sharedCredentials"></a>

```csharp
public object SharedCredentials { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}.

---

##### `VulnerableTlsCipherSuite`<sup>Optional</sup> <a name="VulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.vulnerableTlsCipherSuite"></a>

```csharp
public object VulnerableTlsCipherSuite { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}.

---

### IotSecuritySolutionTimeouts <a name="IotSecuritySolutionTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotSecuritySolutionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecuritySolutionAdditionalWorkspaceList <a name="IotSecuritySolutionAdditionalWorkspaceList" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotSecuritySolutionAdditionalWorkspaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get"></a>

```csharp
private IotSecuritySolutionAdditionalWorkspaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IotSecuritySolutionAdditionalWorkspaceOutputReference <a name="IotSecuritySolutionAdditionalWorkspaceOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotSecuritySolutionAdditionalWorkspaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput">DataTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes">DataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataTypesInput`<sup>Optional</sup> <a name="DataTypesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput"></a>

```csharp
public string[] DataTypesInput { get; }
```

- *Type:* string[]

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `DataTypes`<sup>Required</sup> <a name="DataTypes" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes"></a>

```csharp
public string[] DataTypes { get; }
```

- *Type:* string[]

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IotSecuritySolutionRecommendationsEnabledOutputReference <a name="IotSecuritySolutionRecommendationsEnabledOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotSecuritySolutionRecommendationsEnabledOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAcrAuthentication">ResetAcrAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAgentSendUnutilizedMsg">ResetAgentSendUnutilizedMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetBaseline">ResetBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeHubMemOptimize">ResetEdgeHubMemOptimize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeLoggingOption">ResetEdgeLoggingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInconsistentModuleSettings">ResetInconsistentModuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInstallAgent">ResetInstallAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterDenyAll">ResetIpFilterDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterPermissiveRule">ResetIpFilterPermissiveRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetOpenPorts">ResetOpenPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveFirewallPolicy">ResetPermissiveFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveInputFirewallRules">ResetPermissiveInputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveOutputFirewallRules">ResetPermissiveOutputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPrivilegedDockerOptions">ResetPrivilegedDockerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetSharedCredentials">ResetSharedCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetVulnerableTlsCipherSuite">ResetVulnerableTlsCipherSuite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcrAuthentication` <a name="ResetAcrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAcrAuthentication"></a>

```csharp
private void ResetAcrAuthentication()
```

##### `ResetAgentSendUnutilizedMsg` <a name="ResetAgentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAgentSendUnutilizedMsg"></a>

```csharp
private void ResetAgentSendUnutilizedMsg()
```

##### `ResetBaseline` <a name="ResetBaseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetBaseline"></a>

```csharp
private void ResetBaseline()
```

##### `ResetEdgeHubMemOptimize` <a name="ResetEdgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeHubMemOptimize"></a>

```csharp
private void ResetEdgeHubMemOptimize()
```

##### `ResetEdgeLoggingOption` <a name="ResetEdgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeLoggingOption"></a>

```csharp
private void ResetEdgeLoggingOption()
```

##### `ResetInconsistentModuleSettings` <a name="ResetInconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInconsistentModuleSettings"></a>

```csharp
private void ResetInconsistentModuleSettings()
```

##### `ResetInstallAgent` <a name="ResetInstallAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInstallAgent"></a>

```csharp
private void ResetInstallAgent()
```

##### `ResetIpFilterDenyAll` <a name="ResetIpFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterDenyAll"></a>

```csharp
private void ResetIpFilterDenyAll()
```

##### `ResetIpFilterPermissiveRule` <a name="ResetIpFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterPermissiveRule"></a>

```csharp
private void ResetIpFilterPermissiveRule()
```

##### `ResetOpenPorts` <a name="ResetOpenPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetOpenPorts"></a>

```csharp
private void ResetOpenPorts()
```

##### `ResetPermissiveFirewallPolicy` <a name="ResetPermissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveFirewallPolicy"></a>

```csharp
private void ResetPermissiveFirewallPolicy()
```

##### `ResetPermissiveInputFirewallRules` <a name="ResetPermissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveInputFirewallRules"></a>

```csharp
private void ResetPermissiveInputFirewallRules()
```

##### `ResetPermissiveOutputFirewallRules` <a name="ResetPermissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveOutputFirewallRules"></a>

```csharp
private void ResetPermissiveOutputFirewallRules()
```

##### `ResetPrivilegedDockerOptions` <a name="ResetPrivilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPrivilegedDockerOptions"></a>

```csharp
private void ResetPrivilegedDockerOptions()
```

##### `ResetSharedCredentials` <a name="ResetSharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetSharedCredentials"></a>

```csharp
private void ResetSharedCredentials()
```

##### `ResetVulnerableTlsCipherSuite` <a name="ResetVulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetVulnerableTlsCipherSuite"></a>

```csharp
private void ResetVulnerableTlsCipherSuite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthenticationInput">AcrAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsgInput">AgentSendUnutilizedMsgInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baselineInput">BaselineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimizeInput">EdgeHubMemOptimizeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOptionInput">EdgeLoggingOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettingsInput">InconsistentModuleSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgentInput">InstallAgentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAllInput">IpFilterDenyAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRuleInput">IpFilterPermissiveRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPortsInput">OpenPortsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicyInput">PermissiveFirewallPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRulesInput">PermissiveInputFirewallRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRulesInput">PermissiveOutputFirewallRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptionsInput">PrivilegedDockerOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentialsInput">SharedCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuiteInput">VulnerableTlsCipherSuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthentication">AcrAuthentication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsg">AgentSendUnutilizedMsg</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baseline">Baseline</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimize">EdgeHubMemOptimize</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOption">EdgeLoggingOption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettings">InconsistentModuleSettings</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgent">InstallAgent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAll">IpFilterDenyAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRule">IpFilterPermissiveRule</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPorts">OpenPorts</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicy">PermissiveFirewallPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRules">PermissiveInputFirewallRules</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRules">PermissiveOutputFirewallRules</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptions">PrivilegedDockerOptions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentials">SharedCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuite">VulnerableTlsCipherSuite</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcrAuthenticationInput`<sup>Optional</sup> <a name="AcrAuthenticationInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthenticationInput"></a>

```csharp
public object AcrAuthenticationInput { get; }
```

- *Type:* object

---

##### `AgentSendUnutilizedMsgInput`<sup>Optional</sup> <a name="AgentSendUnutilizedMsgInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsgInput"></a>

```csharp
public object AgentSendUnutilizedMsgInput { get; }
```

- *Type:* object

---

##### `BaselineInput`<sup>Optional</sup> <a name="BaselineInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baselineInput"></a>

```csharp
public object BaselineInput { get; }
```

- *Type:* object

---

##### `EdgeHubMemOptimizeInput`<sup>Optional</sup> <a name="EdgeHubMemOptimizeInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimizeInput"></a>

```csharp
public object EdgeHubMemOptimizeInput { get; }
```

- *Type:* object

---

##### `EdgeLoggingOptionInput`<sup>Optional</sup> <a name="EdgeLoggingOptionInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOptionInput"></a>

```csharp
public object EdgeLoggingOptionInput { get; }
```

- *Type:* object

---

##### `InconsistentModuleSettingsInput`<sup>Optional</sup> <a name="InconsistentModuleSettingsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettingsInput"></a>

```csharp
public object InconsistentModuleSettingsInput { get; }
```

- *Type:* object

---

##### `InstallAgentInput`<sup>Optional</sup> <a name="InstallAgentInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgentInput"></a>

```csharp
public object InstallAgentInput { get; }
```

- *Type:* object

---

##### `IpFilterDenyAllInput`<sup>Optional</sup> <a name="IpFilterDenyAllInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAllInput"></a>

```csharp
public object IpFilterDenyAllInput { get; }
```

- *Type:* object

---

##### `IpFilterPermissiveRuleInput`<sup>Optional</sup> <a name="IpFilterPermissiveRuleInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRuleInput"></a>

```csharp
public object IpFilterPermissiveRuleInput { get; }
```

- *Type:* object

---

##### `OpenPortsInput`<sup>Optional</sup> <a name="OpenPortsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPortsInput"></a>

```csharp
public object OpenPortsInput { get; }
```

- *Type:* object

---

##### `PermissiveFirewallPolicyInput`<sup>Optional</sup> <a name="PermissiveFirewallPolicyInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicyInput"></a>

```csharp
public object PermissiveFirewallPolicyInput { get; }
```

- *Type:* object

---

##### `PermissiveInputFirewallRulesInput`<sup>Optional</sup> <a name="PermissiveInputFirewallRulesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRulesInput"></a>

```csharp
public object PermissiveInputFirewallRulesInput { get; }
```

- *Type:* object

---

##### `PermissiveOutputFirewallRulesInput`<sup>Optional</sup> <a name="PermissiveOutputFirewallRulesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRulesInput"></a>

```csharp
public object PermissiveOutputFirewallRulesInput { get; }
```

- *Type:* object

---

##### `PrivilegedDockerOptionsInput`<sup>Optional</sup> <a name="PrivilegedDockerOptionsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptionsInput"></a>

```csharp
public object PrivilegedDockerOptionsInput { get; }
```

- *Type:* object

---

##### `SharedCredentialsInput`<sup>Optional</sup> <a name="SharedCredentialsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentialsInput"></a>

```csharp
public object SharedCredentialsInput { get; }
```

- *Type:* object

---

##### `VulnerableTlsCipherSuiteInput`<sup>Optional</sup> <a name="VulnerableTlsCipherSuiteInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuiteInput"></a>

```csharp
public object VulnerableTlsCipherSuiteInput { get; }
```

- *Type:* object

---

##### `AcrAuthentication`<sup>Required</sup> <a name="AcrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthentication"></a>

```csharp
public object AcrAuthentication { get; }
```

- *Type:* object

---

##### `AgentSendUnutilizedMsg`<sup>Required</sup> <a name="AgentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsg"></a>

```csharp
public object AgentSendUnutilizedMsg { get; }
```

- *Type:* object

---

##### `Baseline`<sup>Required</sup> <a name="Baseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baseline"></a>

```csharp
public object Baseline { get; }
```

- *Type:* object

---

##### `EdgeHubMemOptimize`<sup>Required</sup> <a name="EdgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimize"></a>

```csharp
public object EdgeHubMemOptimize { get; }
```

- *Type:* object

---

##### `EdgeLoggingOption`<sup>Required</sup> <a name="EdgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOption"></a>

```csharp
public object EdgeLoggingOption { get; }
```

- *Type:* object

---

##### `InconsistentModuleSettings`<sup>Required</sup> <a name="InconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettings"></a>

```csharp
public object InconsistentModuleSettings { get; }
```

- *Type:* object

---

##### `InstallAgent`<sup>Required</sup> <a name="InstallAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgent"></a>

```csharp
public object InstallAgent { get; }
```

- *Type:* object

---

##### `IpFilterDenyAll`<sup>Required</sup> <a name="IpFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAll"></a>

```csharp
public object IpFilterDenyAll { get; }
```

- *Type:* object

---

##### `IpFilterPermissiveRule`<sup>Required</sup> <a name="IpFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRule"></a>

```csharp
public object IpFilterPermissiveRule { get; }
```

- *Type:* object

---

##### `OpenPorts`<sup>Required</sup> <a name="OpenPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPorts"></a>

```csharp
public object OpenPorts { get; }
```

- *Type:* object

---

##### `PermissiveFirewallPolicy`<sup>Required</sup> <a name="PermissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicy"></a>

```csharp
public object PermissiveFirewallPolicy { get; }
```

- *Type:* object

---

##### `PermissiveInputFirewallRules`<sup>Required</sup> <a name="PermissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRules"></a>

```csharp
public object PermissiveInputFirewallRules { get; }
```

- *Type:* object

---

##### `PermissiveOutputFirewallRules`<sup>Required</sup> <a name="PermissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRules"></a>

```csharp
public object PermissiveOutputFirewallRules { get; }
```

- *Type:* object

---

##### `PrivilegedDockerOptions`<sup>Required</sup> <a name="PrivilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptions"></a>

```csharp
public object PrivilegedDockerOptions { get; }
```

- *Type:* object

---

##### `SharedCredentials`<sup>Required</sup> <a name="SharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentials"></a>

```csharp
public object SharedCredentials { get; }
```

- *Type:* object

---

##### `VulnerableTlsCipherSuite`<sup>Required</sup> <a name="VulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuite"></a>

```csharp
public object VulnerableTlsCipherSuite { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.internalValue"></a>

```csharp
public IotSecuritySolutionRecommendationsEnabled InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---


### IotSecuritySolutionTimeoutsOutputReference <a name="IotSecuritySolutionTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotSecuritySolutionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



