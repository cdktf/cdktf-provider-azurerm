# `synapseSparkPool` Submodule <a name="`synapseSparkPool` Submodule" id="@cdktf/provider-azurerm.synapseSparkPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseSparkPool <a name="SynapseSparkPool" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool azurerm_synapse_spark_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPool(Construct Scope, string Id, SynapseSparkPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig">SynapseSparkPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig">SynapseSparkPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoPause">PutAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoScale">PutAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putLibraryRequirement">PutLibraryRequirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putSparkConfig">PutSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoPause">ResetAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoScale">ResetAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetCacheSize">ResetCacheSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetComputeIsolationEnabled">ResetComputeIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetDynamicExecutorAllocationEnabled">ResetDynamicExecutorAllocationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetLibraryRequirement">ResetLibraryRequirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMaxExecutors">ResetMaxExecutors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMinExecutors">ResetMinExecutors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSessionLevelPackagesEnabled">ResetSessionLevelPackagesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkConfig">ResetSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkEventsFolder">ResetSparkEventsFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkLogFolder">ResetSparkLogFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkVersion">ResetSparkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAutoPause` <a name="PutAutoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoPause"></a>

```csharp
private void PutAutoPause(SynapseSparkPoolAutoPause Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoPause.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

---

##### `PutAutoScale` <a name="PutAutoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoScale"></a>

```csharp
private void PutAutoScale(SynapseSparkPoolAutoScale Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putAutoScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

---

##### `PutLibraryRequirement` <a name="PutLibraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putLibraryRequirement"></a>

```csharp
private void PutLibraryRequirement(SynapseSparkPoolLibraryRequirement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putLibraryRequirement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

---

##### `PutSparkConfig` <a name="PutSparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putSparkConfig"></a>

```csharp
private void PutSparkConfig(SynapseSparkPoolSparkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putSparkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts"></a>

```csharp
private void PutTimeouts(SynapseSparkPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>

---

##### `ResetAutoPause` <a name="ResetAutoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoPause"></a>

```csharp
private void ResetAutoPause()
```

##### `ResetAutoScale` <a name="ResetAutoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetAutoScale"></a>

```csharp
private void ResetAutoScale()
```

##### `ResetCacheSize` <a name="ResetCacheSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetCacheSize"></a>

```csharp
private void ResetCacheSize()
```

##### `ResetComputeIsolationEnabled` <a name="ResetComputeIsolationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetComputeIsolationEnabled"></a>

```csharp
private void ResetComputeIsolationEnabled()
```

##### `ResetDynamicExecutorAllocationEnabled` <a name="ResetDynamicExecutorAllocationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetDynamicExecutorAllocationEnabled"></a>

```csharp
private void ResetDynamicExecutorAllocationEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLibraryRequirement` <a name="ResetLibraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetLibraryRequirement"></a>

```csharp
private void ResetLibraryRequirement()
```

##### `ResetMaxExecutors` <a name="ResetMaxExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMaxExecutors"></a>

```csharp
private void ResetMaxExecutors()
```

##### `ResetMinExecutors` <a name="ResetMinExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetMinExecutors"></a>

```csharp
private void ResetMinExecutors()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetNodeCount"></a>

```csharp
private void ResetNodeCount()
```

##### `ResetSessionLevelPackagesEnabled` <a name="ResetSessionLevelPackagesEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSessionLevelPackagesEnabled"></a>

```csharp
private void ResetSessionLevelPackagesEnabled()
```

##### `ResetSparkConfig` <a name="ResetSparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkConfig"></a>

```csharp
private void ResetSparkConfig()
```

##### `ResetSparkEventsFolder` <a name="ResetSparkEventsFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkEventsFolder"></a>

```csharp
private void ResetSparkEventsFolder()
```

##### `ResetSparkLogFolder` <a name="ResetSparkLogFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkLogFolder"></a>

```csharp
private void ResetSparkLogFolder()
```

##### `ResetSparkVersion` <a name="ResetSparkVersion" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetSparkVersion"></a>

```csharp
private void ResetSparkVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseSparkPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseSparkPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseSparkPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPause">AutoPause</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference">SynapseSparkPoolAutoPauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScale">AutoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference">SynapseSparkPoolAutoScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirement">LibraryRequirement</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference">SynapseSparkPoolLibraryRequirementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfig">SparkConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference">SynapseSparkPoolSparkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference">SynapseSparkPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPauseInput">AutoPauseInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScaleInput">AutoScaleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSizeInput">CacheSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabledInput">ComputeIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabledInput">DynamicExecutorAllocationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirementInput">LibraryRequirementInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutorsInput">MaxExecutorsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutorsInput">MinExecutorsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamilyInput">NodeSizeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeInput">NodeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabledInput">SessionLevelPackagesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfigInput">SparkConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolderInput">SparkEventsFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolderInput">SparkLogFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersionInput">SparkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceIdInput">SynapseWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSize">CacheSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabled">ComputeIsolationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabled">DynamicExecutorAllocationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutors">MaxExecutors</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutors">MinExecutors</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSize">NodeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamily">NodeSizeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabled">SessionLevelPackagesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolder">SparkEventsFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolder">SparkLogFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersion">SparkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoPause`<sup>Required</sup> <a name="AutoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPause"></a>

```csharp
public SynapseSparkPoolAutoPauseOutputReference AutoPause { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference">SynapseSparkPoolAutoPauseOutputReference</a>

---

##### `AutoScale`<sup>Required</sup> <a name="AutoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScale"></a>

```csharp
public SynapseSparkPoolAutoScaleOutputReference AutoScale { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference">SynapseSparkPoolAutoScaleOutputReference</a>

---

##### `LibraryRequirement`<sup>Required</sup> <a name="LibraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirement"></a>

```csharp
public SynapseSparkPoolLibraryRequirementOutputReference LibraryRequirement { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference">SynapseSparkPoolLibraryRequirementOutputReference</a>

---

##### `SparkConfig`<sup>Required</sup> <a name="SparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfig"></a>

```csharp
public SynapseSparkPoolSparkConfigOutputReference SparkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference">SynapseSparkPoolSparkConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeouts"></a>

```csharp
public SynapseSparkPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference">SynapseSparkPoolTimeoutsOutputReference</a>

---

##### `AutoPauseInput`<sup>Optional</sup> <a name="AutoPauseInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoPauseInput"></a>

```csharp
public SynapseSparkPoolAutoPause AutoPauseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

---

##### `AutoScaleInput`<sup>Optional</sup> <a name="AutoScaleInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.autoScaleInput"></a>

```csharp
public SynapseSparkPoolAutoScale AutoScaleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

---

##### `CacheSizeInput`<sup>Optional</sup> <a name="CacheSizeInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSizeInput"></a>

```csharp
public double CacheSizeInput { get; }
```

- *Type:* double

---

##### `ComputeIsolationEnabledInput`<sup>Optional</sup> <a name="ComputeIsolationEnabledInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabledInput"></a>

```csharp
public object ComputeIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `DynamicExecutorAllocationEnabledInput`<sup>Optional</sup> <a name="DynamicExecutorAllocationEnabledInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabledInput"></a>

```csharp
public object DynamicExecutorAllocationEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LibraryRequirementInput`<sup>Optional</sup> <a name="LibraryRequirementInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.libraryRequirementInput"></a>

```csharp
public SynapseSparkPoolLibraryRequirement LibraryRequirementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

---

##### `MaxExecutorsInput`<sup>Optional</sup> <a name="MaxExecutorsInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutorsInput"></a>

```csharp
public double MaxExecutorsInput { get; }
```

- *Type:* double

---

##### `MinExecutorsInput`<sup>Optional</sup> <a name="MinExecutorsInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutorsInput"></a>

```csharp
public double MinExecutorsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `NodeSizeFamilyInput`<sup>Optional</sup> <a name="NodeSizeFamilyInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamilyInput"></a>

```csharp
public string NodeSizeFamilyInput { get; }
```

- *Type:* string

---

##### `NodeSizeInput`<sup>Optional</sup> <a name="NodeSizeInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeInput"></a>

```csharp
public string NodeSizeInput { get; }
```

- *Type:* string

---

##### `SessionLevelPackagesEnabledInput`<sup>Optional</sup> <a name="SessionLevelPackagesEnabledInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabledInput"></a>

```csharp
public object SessionLevelPackagesEnabledInput { get; }
```

- *Type:* object

---

##### `SparkConfigInput`<sup>Optional</sup> <a name="SparkConfigInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkConfigInput"></a>

```csharp
public SynapseSparkPoolSparkConfig SparkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

---

##### `SparkEventsFolderInput`<sup>Optional</sup> <a name="SparkEventsFolderInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolderInput"></a>

```csharp
public string SparkEventsFolderInput { get; }
```

- *Type:* string

---

##### `SparkLogFolderInput`<sup>Optional</sup> <a name="SparkLogFolderInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolderInput"></a>

```csharp
public string SparkLogFolderInput { get; }
```

- *Type:* string

---

##### `SparkVersionInput`<sup>Optional</sup> <a name="SparkVersionInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersionInput"></a>

```csharp
public string SparkVersionInput { get; }
```

- *Type:* string

---

##### `SynapseWorkspaceIdInput`<sup>Optional</sup> <a name="SynapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceIdInput"></a>

```csharp
public string SynapseWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CacheSize`<sup>Required</sup> <a name="CacheSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.cacheSize"></a>

```csharp
public double CacheSize { get; }
```

- *Type:* double

---

##### `ComputeIsolationEnabled`<sup>Required</sup> <a name="ComputeIsolationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.computeIsolationEnabled"></a>

```csharp
public object ComputeIsolationEnabled { get; }
```

- *Type:* object

---

##### `DynamicExecutorAllocationEnabled`<sup>Required</sup> <a name="DynamicExecutorAllocationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.dynamicExecutorAllocationEnabled"></a>

```csharp
public object DynamicExecutorAllocationEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxExecutors`<sup>Required</sup> <a name="MaxExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.maxExecutors"></a>

```csharp
public double MaxExecutors { get; }
```

- *Type:* double

---

##### `MinExecutors`<sup>Required</sup> <a name="MinExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.minExecutors"></a>

```csharp
public double MinExecutors { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NodeSize`<sup>Required</sup> <a name="NodeSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSize"></a>

```csharp
public string NodeSize { get; }
```

- *Type:* string

---

##### `NodeSizeFamily`<sup>Required</sup> <a name="NodeSizeFamily" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.nodeSizeFamily"></a>

```csharp
public string NodeSizeFamily { get; }
```

- *Type:* string

---

##### `SessionLevelPackagesEnabled`<sup>Required</sup> <a name="SessionLevelPackagesEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sessionLevelPackagesEnabled"></a>

```csharp
public object SessionLevelPackagesEnabled { get; }
```

- *Type:* object

---

##### `SparkEventsFolder`<sup>Required</sup> <a name="SparkEventsFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkEventsFolder"></a>

```csharp
public string SparkEventsFolder { get; }
```

- *Type:* string

---

##### `SparkLogFolder`<sup>Required</sup> <a name="SparkLogFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkLogFolder"></a>

```csharp
public string SparkLogFolder { get; }
```

- *Type:* string

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.sparkVersion"></a>

```csharp
public string SparkVersion { get; }
```

- *Type:* string

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.synapseWorkspaceId"></a>

```csharp
public string SynapseWorkspaceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseSparkPoolAutoPause <a name="SynapseSparkPoolAutoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPoolAutoPause {
    double DelayInMinutes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause.property.delayInMinutes">DelayInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#delay_in_minutes SynapseSparkPool#delay_in_minutes}. |

---

##### `DelayInMinutes`<sup>Required</sup> <a name="DelayInMinutes" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause.property.delayInMinutes"></a>

```csharp
public double DelayInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#delay_in_minutes SynapseSparkPool#delay_in_minutes}.

---

### SynapseSparkPoolAutoScale <a name="SynapseSparkPoolAutoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPoolAutoScale {
    double MaxNodeCount,
    double MinNodeCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#max_node_count SynapseSparkPool#max_node_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#min_node_count SynapseSparkPool#min_node_count}. |

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#max_node_count SynapseSparkPool#max_node_count}.

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#min_node_count SynapseSparkPool#min_node_count}.

---

### SynapseSparkPoolConfig <a name="SynapseSparkPoolConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPoolConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string NodeSize,
    string NodeSizeFamily,
    string SynapseWorkspaceId,
    SynapseSparkPoolAutoPause AutoPause = null,
    SynapseSparkPoolAutoScale AutoScale = null,
    double CacheSize = null,
    object ComputeIsolationEnabled = null,
    object DynamicExecutorAllocationEnabled = null,
    string Id = null,
    SynapseSparkPoolLibraryRequirement LibraryRequirement = null,
    double MaxExecutors = null,
    double MinExecutors = null,
    double NodeCount = null,
    object SessionLevelPackagesEnabled = null,
    SynapseSparkPoolSparkConfig SparkConfig = null,
    string SparkEventsFolder = null,
    string SparkLogFolder = null,
    string SparkVersion = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SynapseSparkPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#name SynapseSparkPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSize">NodeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#node_size SynapseSparkPool#node_size}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSizeFamily">NodeSizeFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#node_size_family SynapseSparkPool#node_size_family}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoPause">AutoPause</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a></code> | auto_pause block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoScale">AutoScale</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a></code> | auto_scale block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.cacheSize">CacheSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#cache_size SynapseSparkPool#cache_size}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.computeIsolationEnabled">ComputeIsolationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dynamicExecutorAllocationEnabled">DynamicExecutorAllocationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#id SynapseSparkPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.libraryRequirement">LibraryRequirement</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a></code> | library_requirement block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.maxExecutors">MaxExecutors</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#max_executors SynapseSparkPool#max_executors}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.minExecutors">MinExecutors</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#min_executors SynapseSparkPool#min_executors}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeCount">NodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#node_count SynapseSparkPool#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sessionLevelPackagesEnabled">SessionLevelPackagesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkConfig">SparkConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a></code> | spark_config block. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkEventsFolder">SparkEventsFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#spark_events_folder SynapseSparkPool#spark_events_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkLogFolder">SparkLogFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#spark_log_folder SynapseSparkPool#spark_log_folder}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkVersion">SparkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#spark_version SynapseSparkPool#spark_version}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#tags SynapseSparkPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#name SynapseSparkPool#name}.

---

##### `NodeSize`<sup>Required</sup> <a name="NodeSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSize"></a>

```csharp
public string NodeSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#node_size SynapseSparkPool#node_size}.

---

##### `NodeSizeFamily`<sup>Required</sup> <a name="NodeSizeFamily" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeSizeFamily"></a>

```csharp
public string NodeSizeFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#node_size_family SynapseSparkPool#node_size_family}.

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.synapseWorkspaceId"></a>

```csharp
public string SynapseWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#synapse_workspace_id SynapseSparkPool#synapse_workspace_id}.

---

##### `AutoPause`<sup>Optional</sup> <a name="AutoPause" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoPause"></a>

```csharp
public SynapseSparkPoolAutoPause AutoPause { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

auto_pause block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#auto_pause SynapseSparkPool#auto_pause}

---

##### `AutoScale`<sup>Optional</sup> <a name="AutoScale" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.autoScale"></a>

```csharp
public SynapseSparkPoolAutoScale AutoScale { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

auto_scale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#auto_scale SynapseSparkPool#auto_scale}

---

##### `CacheSize`<sup>Optional</sup> <a name="CacheSize" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.cacheSize"></a>

```csharp
public double CacheSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#cache_size SynapseSparkPool#cache_size}.

---

##### `ComputeIsolationEnabled`<sup>Optional</sup> <a name="ComputeIsolationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.computeIsolationEnabled"></a>

```csharp
public object ComputeIsolationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#compute_isolation_enabled SynapseSparkPool#compute_isolation_enabled}.

---

##### `DynamicExecutorAllocationEnabled`<sup>Optional</sup> <a name="DynamicExecutorAllocationEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.dynamicExecutorAllocationEnabled"></a>

```csharp
public object DynamicExecutorAllocationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#dynamic_executor_allocation_enabled SynapseSparkPool#dynamic_executor_allocation_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#id SynapseSparkPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LibraryRequirement`<sup>Optional</sup> <a name="LibraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.libraryRequirement"></a>

```csharp
public SynapseSparkPoolLibraryRequirement LibraryRequirement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

library_requirement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#library_requirement SynapseSparkPool#library_requirement}

---

##### `MaxExecutors`<sup>Optional</sup> <a name="MaxExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.maxExecutors"></a>

```csharp
public double MaxExecutors { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#max_executors SynapseSparkPool#max_executors}.

---

##### `MinExecutors`<sup>Optional</sup> <a name="MinExecutors" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.minExecutors"></a>

```csharp
public double MinExecutors { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#min_executors SynapseSparkPool#min_executors}.

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#node_count SynapseSparkPool#node_count}.

---

##### `SessionLevelPackagesEnabled`<sup>Optional</sup> <a name="SessionLevelPackagesEnabled" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sessionLevelPackagesEnabled"></a>

```csharp
public object SessionLevelPackagesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#session_level_packages_enabled SynapseSparkPool#session_level_packages_enabled}.

---

##### `SparkConfig`<sup>Optional</sup> <a name="SparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkConfig"></a>

```csharp
public SynapseSparkPoolSparkConfig SparkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

spark_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#spark_config SynapseSparkPool#spark_config}

---

##### `SparkEventsFolder`<sup>Optional</sup> <a name="SparkEventsFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkEventsFolder"></a>

```csharp
public string SparkEventsFolder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#spark_events_folder SynapseSparkPool#spark_events_folder}.

---

##### `SparkLogFolder`<sup>Optional</sup> <a name="SparkLogFolder" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkLogFolder"></a>

```csharp
public string SparkLogFolder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#spark_log_folder SynapseSparkPool#spark_log_folder}.

---

##### `SparkVersion`<sup>Optional</sup> <a name="SparkVersion" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.sparkVersion"></a>

```csharp
public string SparkVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#spark_version SynapseSparkPool#spark_version}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#tags SynapseSparkPool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolConfig.property.timeouts"></a>

```csharp
public SynapseSparkPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts">SynapseSparkPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#timeouts SynapseSparkPool#timeouts}

---

### SynapseSparkPoolLibraryRequirement <a name="SynapseSparkPoolLibraryRequirement" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPoolLibraryRequirement {
    string Content,
    string Filename
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#content SynapseSparkPool#content}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.filename">Filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#filename SynapseSparkPool#filename}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#content SynapseSparkPool#content}.

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#filename SynapseSparkPool#filename}.

---

### SynapseSparkPoolSparkConfig <a name="SynapseSparkPoolSparkConfig" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPoolSparkConfig {
    string Content,
    string Filename
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#content SynapseSparkPool#content}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.filename">Filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#filename SynapseSparkPool#filename}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#content SynapseSparkPool#content}.

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#filename SynapseSparkPool#filename}.

---

### SynapseSparkPoolTimeouts <a name="SynapseSparkPoolTimeouts" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#create SynapseSparkPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#delete SynapseSparkPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#read SynapseSparkPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#update SynapseSparkPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#create SynapseSparkPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#delete SynapseSparkPool#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#read SynapseSparkPool#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_spark_pool#update SynapseSparkPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseSparkPoolAutoPauseOutputReference <a name="SynapseSparkPoolAutoPauseOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPoolAutoPauseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutesInput">DelayInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutes">DelayInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelayInMinutesInput`<sup>Optional</sup> <a name="DelayInMinutesInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutesInput"></a>

```csharp
public double DelayInMinutesInput { get; }
```

- *Type:* double

---

##### `DelayInMinutes`<sup>Required</sup> <a name="DelayInMinutes" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.delayInMinutes"></a>

```csharp
public double DelayInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPauseOutputReference.property.internalValue"></a>

```csharp
public SynapseSparkPoolAutoPause InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoPause">SynapseSparkPoolAutoPause</a>

---


### SynapseSparkPoolAutoScaleOutputReference <a name="SynapseSparkPoolAutoScaleOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPoolAutoScaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCountInput"></a>

```csharp
public double MaxNodeCountInput { get; }
```

- *Type:* double

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCountInput"></a>

```csharp
public double MinNodeCountInput { get; }
```

- *Type:* double

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScaleOutputReference.property.internalValue"></a>

```csharp
public SynapseSparkPoolAutoScale InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolAutoScale">SynapseSparkPoolAutoScale</a>

---


### SynapseSparkPoolLibraryRequirementOutputReference <a name="SynapseSparkPoolLibraryRequirementOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPoolLibraryRequirementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirementOutputReference.property.internalValue"></a>

```csharp
public SynapseSparkPoolLibraryRequirement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolLibraryRequirement">SynapseSparkPoolLibraryRequirement</a>

---


### SynapseSparkPoolSparkConfigOutputReference <a name="SynapseSparkPoolSparkConfigOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPoolSparkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfigOutputReference.property.internalValue"></a>

```csharp
public SynapseSparkPoolSparkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolSparkConfig">SynapseSparkPoolSparkConfig</a>

---


### SynapseSparkPoolTimeoutsOutputReference <a name="SynapseSparkPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseSparkPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseSparkPool.SynapseSparkPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



