# `azurerm_stream_analytics_job`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_job`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job).

# `streamAnalyticsJob` Submodule <a name="`streamAnalyticsJob` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsJob <a name="StreamAnalyticsJob" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job azurerm_stream_analytics_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJob(Construct Scope, string Id, StreamAnalyticsJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig">StreamAnalyticsJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig">StreamAnalyticsJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putJobStorageAccount">PutJobStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetCompatibilityLevel">ResetCompatibilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetContentStoragePolicy">ResetContentStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetDataLocale">ResetDataLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsLateArrivalMaxDelayInSeconds">ResetEventsLateArrivalMaxDelayInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderMaxDelayInSeconds">ResetEventsOutOfOrderMaxDelayInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderPolicy">ResetEventsOutOfOrderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetJobStorageAccount">ResetJobStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOutputErrorPolicy">ResetOutputErrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamAnalyticsClusterId">ResetStreamAnalyticsClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamingUnits">ResetStreamingUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putIdentity"></a>

```csharp
private void PutIdentity(StreamAnalyticsJobIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

---

##### `PutJobStorageAccount` <a name="PutJobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putJobStorageAccount"></a>

```csharp
private void PutJobStorageAccount(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putJobStorageAccount.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putTimeouts"></a>

```csharp
private void PutTimeouts(StreamAnalyticsJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a>

---

##### `ResetCompatibilityLevel` <a name="ResetCompatibilityLevel" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetCompatibilityLevel"></a>

```csharp
private void ResetCompatibilityLevel()
```

##### `ResetContentStoragePolicy` <a name="ResetContentStoragePolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetContentStoragePolicy"></a>

```csharp
private void ResetContentStoragePolicy()
```

##### `ResetDataLocale` <a name="ResetDataLocale" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetDataLocale"></a>

```csharp
private void ResetDataLocale()
```

##### `ResetEventsLateArrivalMaxDelayInSeconds` <a name="ResetEventsLateArrivalMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsLateArrivalMaxDelayInSeconds"></a>

```csharp
private void ResetEventsLateArrivalMaxDelayInSeconds()
```

##### `ResetEventsOutOfOrderMaxDelayInSeconds` <a name="ResetEventsOutOfOrderMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderMaxDelayInSeconds"></a>

```csharp
private void ResetEventsOutOfOrderMaxDelayInSeconds()
```

##### `ResetEventsOutOfOrderPolicy` <a name="ResetEventsOutOfOrderPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetEventsOutOfOrderPolicy"></a>

```csharp
private void ResetEventsOutOfOrderPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetJobStorageAccount` <a name="ResetJobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetJobStorageAccount"></a>

```csharp
private void ResetJobStorageAccount()
```

##### `ResetOutputErrorPolicy` <a name="ResetOutputErrorPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetOutputErrorPolicy"></a>

```csharp
private void ResetOutputErrorPolicy()
```

##### `ResetStreamAnalyticsClusterId` <a name="ResetStreamAnalyticsClusterId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamAnalyticsClusterId"></a>

```csharp
private void ResetStreamAnalyticsClusterId()
```

##### `ResetStreamingUnits` <a name="ResetStreamingUnits" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetStreamingUnits"></a>

```csharp
private void ResetStreamingUnits()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference">StreamAnalyticsJobIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccount">JobStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList">StreamAnalyticsJobJobStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference">StreamAnalyticsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevelInput">CompatibilityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicyInput">ContentStoragePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocaleInput">DataLocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSecondsInput">EventsLateArrivalMaxDelayInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSecondsInput">EventsOutOfOrderMaxDelayInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicyInput">EventsOutOfOrderPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccountInput">JobStorageAccountInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicyInput">OutputErrorPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterIdInput">StreamAnalyticsClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnitsInput">StreamingUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQueryInput">TransformationQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevel">CompatibilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicy">ContentStoragePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocale">DataLocale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSeconds">EventsLateArrivalMaxDelayInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSeconds">EventsOutOfOrderMaxDelayInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicy">EventsOutOfOrderPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicy">OutputErrorPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterId">StreamAnalyticsClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnits">StreamingUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQuery">TransformationQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identity"></a>

```csharp
public StreamAnalyticsJobIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference">StreamAnalyticsJobIdentityOutputReference</a>

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `JobStorageAccount`<sup>Required</sup> <a name="JobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccount"></a>

```csharp
public StreamAnalyticsJobJobStorageAccountList JobStorageAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList">StreamAnalyticsJobJobStorageAccountList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeouts"></a>

```csharp
public StreamAnalyticsJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference">StreamAnalyticsJobTimeoutsOutputReference</a>

---

##### `CompatibilityLevelInput`<sup>Optional</sup> <a name="CompatibilityLevelInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevelInput"></a>

```csharp
public string CompatibilityLevelInput { get; }
```

- *Type:* string

---

##### `ContentStoragePolicyInput`<sup>Optional</sup> <a name="ContentStoragePolicyInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicyInput"></a>

```csharp
public string ContentStoragePolicyInput { get; }
```

- *Type:* string

---

##### `DataLocaleInput`<sup>Optional</sup> <a name="DataLocaleInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocaleInput"></a>

```csharp
public string DataLocaleInput { get; }
```

- *Type:* string

---

##### `EventsLateArrivalMaxDelayInSecondsInput`<sup>Optional</sup> <a name="EventsLateArrivalMaxDelayInSecondsInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSecondsInput"></a>

```csharp
public double EventsLateArrivalMaxDelayInSecondsInput { get; }
```

- *Type:* double

---

##### `EventsOutOfOrderMaxDelayInSecondsInput`<sup>Optional</sup> <a name="EventsOutOfOrderMaxDelayInSecondsInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSecondsInput"></a>

```csharp
public double EventsOutOfOrderMaxDelayInSecondsInput { get; }
```

- *Type:* double

---

##### `EventsOutOfOrderPolicyInput`<sup>Optional</sup> <a name="EventsOutOfOrderPolicyInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicyInput"></a>

```csharp
public string EventsOutOfOrderPolicyInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.identityInput"></a>

```csharp
public StreamAnalyticsJobIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobStorageAccountInput`<sup>Optional</sup> <a name="JobStorageAccountInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.jobStorageAccountInput"></a>

```csharp
public object JobStorageAccountInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputErrorPolicyInput`<sup>Optional</sup> <a name="OutputErrorPolicyInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicyInput"></a>

```csharp
public string OutputErrorPolicyInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StreamAnalyticsClusterIdInput`<sup>Optional</sup> <a name="StreamAnalyticsClusterIdInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterIdInput"></a>

```csharp
public string StreamAnalyticsClusterIdInput { get; }
```

- *Type:* string

---

##### `StreamingUnitsInput`<sup>Optional</sup> <a name="StreamingUnitsInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnitsInput"></a>

```csharp
public double StreamingUnitsInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransformationQueryInput`<sup>Optional</sup> <a name="TransformationQueryInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQueryInput"></a>

```csharp
public string TransformationQueryInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CompatibilityLevel`<sup>Required</sup> <a name="CompatibilityLevel" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.compatibilityLevel"></a>

```csharp
public string CompatibilityLevel { get; }
```

- *Type:* string

---

##### `ContentStoragePolicy`<sup>Required</sup> <a name="ContentStoragePolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.contentStoragePolicy"></a>

```csharp
public string ContentStoragePolicy { get; }
```

- *Type:* string

---

##### `DataLocale`<sup>Required</sup> <a name="DataLocale" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.dataLocale"></a>

```csharp
public string DataLocale { get; }
```

- *Type:* string

---

##### `EventsLateArrivalMaxDelayInSeconds`<sup>Required</sup> <a name="EventsLateArrivalMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSeconds"></a>

```csharp
public double EventsLateArrivalMaxDelayInSeconds { get; }
```

- *Type:* double

---

##### `EventsOutOfOrderMaxDelayInSeconds`<sup>Required</sup> <a name="EventsOutOfOrderMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSeconds"></a>

```csharp
public double EventsOutOfOrderMaxDelayInSeconds { get; }
```

- *Type:* double

---

##### `EventsOutOfOrderPolicy`<sup>Required</sup> <a name="EventsOutOfOrderPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.eventsOutOfOrderPolicy"></a>

```csharp
public string EventsOutOfOrderPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputErrorPolicy`<sup>Required</sup> <a name="OutputErrorPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.outputErrorPolicy"></a>

```csharp
public string OutputErrorPolicy { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StreamAnalyticsClusterId`<sup>Required</sup> <a name="StreamAnalyticsClusterId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamAnalyticsClusterId"></a>

```csharp
public string StreamAnalyticsClusterId { get; }
```

- *Type:* string

---

##### `StreamingUnits`<sup>Required</sup> <a name="StreamingUnits" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.streamingUnits"></a>

```csharp
public double StreamingUnits { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransformationQuery`<sup>Required</sup> <a name="TransformationQuery" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.transformationQuery"></a>

```csharp
public string TransformationQuery { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsJobConfig <a name="StreamAnalyticsJobConfig" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string TransformationQuery,
    string CompatibilityLevel = null,
    string ContentStoragePolicy = null,
    string DataLocale = null,
    double EventsLateArrivalMaxDelayInSeconds = null,
    double EventsOutOfOrderMaxDelayInSeconds = null,
    string EventsOutOfOrderPolicy = null,
    string Id = null,
    StreamAnalyticsJobIdentity Identity = null,
    object JobStorageAccount = null,
    string OutputErrorPolicy = null,
    string StreamAnalyticsClusterId = null,
    double StreamingUnits = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    StreamAnalyticsJobTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#location StreamAnalyticsJob#location}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#name StreamAnalyticsJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#resource_group_name StreamAnalyticsJob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.transformationQuery">TransformationQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#transformation_query StreamAnalyticsJob#transformation_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.compatibilityLevel">CompatibilityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#compatibility_level StreamAnalyticsJob#compatibility_level}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.contentStoragePolicy">ContentStoragePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#content_storage_policy StreamAnalyticsJob#content_storage_policy}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dataLocale">DataLocale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#data_locale StreamAnalyticsJob#data_locale}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsLateArrivalMaxDelayInSeconds">EventsLateArrivalMaxDelayInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#events_late_arrival_max_delay_in_seconds StreamAnalyticsJob#events_late_arrival_max_delay_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderMaxDelayInSeconds">EventsOutOfOrderMaxDelayInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#events_out_of_order_max_delay_in_seconds StreamAnalyticsJob#events_out_of_order_max_delay_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderPolicy">EventsOutOfOrderPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#events_out_of_order_policy StreamAnalyticsJob#events_out_of_order_policy}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#id StreamAnalyticsJob#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.jobStorageAccount">JobStorageAccount</a></code> | <code>object</code> | job_storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.outputErrorPolicy">OutputErrorPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#output_error_policy StreamAnalyticsJob#output_error_policy}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamAnalyticsClusterId">StreamAnalyticsClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#stream_analytics_cluster_id StreamAnalyticsJob#stream_analytics_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamingUnits">StreamingUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#streaming_units StreamAnalyticsJob#streaming_units}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#tags StreamAnalyticsJob#tags}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#location StreamAnalyticsJob#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#name StreamAnalyticsJob#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#resource_group_name StreamAnalyticsJob#resource_group_name}.

---

##### `TransformationQuery`<sup>Required</sup> <a name="TransformationQuery" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.transformationQuery"></a>

```csharp
public string TransformationQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#transformation_query StreamAnalyticsJob#transformation_query}.

---

##### `CompatibilityLevel`<sup>Optional</sup> <a name="CompatibilityLevel" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.compatibilityLevel"></a>

```csharp
public string CompatibilityLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#compatibility_level StreamAnalyticsJob#compatibility_level}.

---

##### `ContentStoragePolicy`<sup>Optional</sup> <a name="ContentStoragePolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.contentStoragePolicy"></a>

```csharp
public string ContentStoragePolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#content_storage_policy StreamAnalyticsJob#content_storage_policy}.

---

##### `DataLocale`<sup>Optional</sup> <a name="DataLocale" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.dataLocale"></a>

```csharp
public string DataLocale { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#data_locale StreamAnalyticsJob#data_locale}.

---

##### `EventsLateArrivalMaxDelayInSeconds`<sup>Optional</sup> <a name="EventsLateArrivalMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsLateArrivalMaxDelayInSeconds"></a>

```csharp
public double EventsLateArrivalMaxDelayInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#events_late_arrival_max_delay_in_seconds StreamAnalyticsJob#events_late_arrival_max_delay_in_seconds}.

---

##### `EventsOutOfOrderMaxDelayInSeconds`<sup>Optional</sup> <a name="EventsOutOfOrderMaxDelayInSeconds" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderMaxDelayInSeconds"></a>

```csharp
public double EventsOutOfOrderMaxDelayInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#events_out_of_order_max_delay_in_seconds StreamAnalyticsJob#events_out_of_order_max_delay_in_seconds}.

---

##### `EventsOutOfOrderPolicy`<sup>Optional</sup> <a name="EventsOutOfOrderPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.eventsOutOfOrderPolicy"></a>

```csharp
public string EventsOutOfOrderPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#events_out_of_order_policy StreamAnalyticsJob#events_out_of_order_policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#id StreamAnalyticsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.identity"></a>

```csharp
public StreamAnalyticsJobIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#identity StreamAnalyticsJob#identity}

---

##### `JobStorageAccount`<sup>Optional</sup> <a name="JobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.jobStorageAccount"></a>

```csharp
public object JobStorageAccount { get; set; }
```

- *Type:* object

job_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#job_storage_account StreamAnalyticsJob#job_storage_account}

---

##### `OutputErrorPolicy`<sup>Optional</sup> <a name="OutputErrorPolicy" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.outputErrorPolicy"></a>

```csharp
public string OutputErrorPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#output_error_policy StreamAnalyticsJob#output_error_policy}.

---

##### `StreamAnalyticsClusterId`<sup>Optional</sup> <a name="StreamAnalyticsClusterId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamAnalyticsClusterId"></a>

```csharp
public string StreamAnalyticsClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#stream_analytics_cluster_id StreamAnalyticsJob#stream_analytics_cluster_id}.

---

##### `StreamingUnits`<sup>Optional</sup> <a name="StreamingUnits" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.streamingUnits"></a>

```csharp
public double StreamingUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#streaming_units StreamAnalyticsJob#streaming_units}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#tags StreamAnalyticsJob#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.timeouts"></a>

```csharp
public StreamAnalyticsJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts">StreamAnalyticsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#timeouts StreamAnalyticsJob#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}.

---

### StreamAnalyticsJobIdentity <a name="StreamAnalyticsJobIdentity" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobIdentity {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#type StreamAnalyticsJob#type}.

---

### StreamAnalyticsJobJobStorageAccount <a name="StreamAnalyticsJobJobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobJobStorageAccount {
    string AccountKey,
    string AccountName,
    string AuthenticationMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountKey">AccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#account_key StreamAnalyticsJob#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#account_name StreamAnalyticsJob#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#authentication_mode StreamAnalyticsJob#authentication_mode}. |

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountKey"></a>

```csharp
public string AccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#account_key StreamAnalyticsJob#account_key}.

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#account_name StreamAnalyticsJob#account_name}.

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccount.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#authentication_mode StreamAnalyticsJob#authentication_mode}.

---

### StreamAnalyticsJobTimeouts <a name="StreamAnalyticsJobTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#create StreamAnalyticsJob#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#delete StreamAnalyticsJob#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#read StreamAnalyticsJob#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#update StreamAnalyticsJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#create StreamAnalyticsJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#delete StreamAnalyticsJob#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#read StreamAnalyticsJob#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/stream_analytics_job#update StreamAnalyticsJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsJobIdentityOutputReference <a name="StreamAnalyticsJobIdentityOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentityOutputReference.property.internalValue"></a>

```csharp
public StreamAnalyticsJobIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobIdentity">StreamAnalyticsJobIdentity</a>

---


### StreamAnalyticsJobJobStorageAccountList <a name="StreamAnalyticsJobJobStorageAccountList" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobJobStorageAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.get"></a>

```csharp
private StreamAnalyticsJobJobStorageAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StreamAnalyticsJobJobStorageAccountOutputReference <a name="StreamAnalyticsJobJobStorageAccountOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobJobStorageAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.resetAuthenticationMode"></a>

```csharp
private void ResetAuthenticationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKeyInput">AccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKey">AccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKeyInput"></a>

```csharp
public string AccountKeyInput { get; }
```

- *Type:* string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationModeInput"></a>

```csharp
public string AuthenticationModeInput { get; }
```

- *Type:* string

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountKey"></a>

```csharp
public string AccountKey { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobJobStorageAccountOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### StreamAnalyticsJobTimeoutsOutputReference <a name="StreamAnalyticsJobTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsJob.StreamAnalyticsJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



