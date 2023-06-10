# `azurerm_function_app_slot`

Refer to the Terraform Registory for docs: [`azurerm_function_app_slot`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot).

# `functionAppSlot` Submodule <a name="`functionAppSlot` Submodule" id="@cdktf/provider-azurerm.functionAppSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionAppSlot <a name="FunctionAppSlot" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot azurerm_function_app_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlot(Construct Scope, string Id, FunctionAppSlotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig">FunctionAppSlotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig">FunctionAppSlotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings">PutAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putConnectionString">PutConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig">PutSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAppSettings">ResetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAuthSettings">ResetAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetDailyMemoryTimeQuota">ResetDailyMemoryTimeQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnableBuiltinLogging">ResetEnableBuiltinLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetHttpsOnly">ResetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetSiteConfig">ResetSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAuthSettings` <a name="PutAuthSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings"></a>

```csharp
private void PutAuthSettings(FunctionAppSlotAuthSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

---

##### `PutConnectionString` <a name="PutConnectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putConnectionString"></a>

```csharp
private void PutConnectionString(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putConnectionString.parameter.value"></a>

- *Type:* object

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putIdentity"></a>

```csharp
private void PutIdentity(FunctionAppSlotIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

---

##### `PutSiteConfig` <a name="PutSiteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig"></a>

```csharp
private void PutSiteConfig(FunctionAppSlotSiteConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts"></a>

```csharp
private void PutTimeouts(FunctionAppSlotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>

---

##### `ResetAppSettings` <a name="ResetAppSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAppSettings"></a>

```csharp
private void ResetAppSettings()
```

##### `ResetAuthSettings` <a name="ResetAuthSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAuthSettings"></a>

```csharp
private void ResetAuthSettings()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetDailyMemoryTimeQuota` <a name="ResetDailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetDailyMemoryTimeQuota"></a>

```csharp
private void ResetDailyMemoryTimeQuota()
```

##### `ResetEnableBuiltinLogging` <a name="ResetEnableBuiltinLogging" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnableBuiltinLogging"></a>

```csharp
private void ResetEnableBuiltinLogging()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHttpsOnly` <a name="ResetHttpsOnly" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetHttpsOnly"></a>

```csharp
private void ResetHttpsOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOsType"></a>

```csharp
private void ResetOsType()
```

##### `ResetSiteConfig` <a name="ResetSiteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetSiteConfig"></a>

```csharp
private void ResetSiteConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FunctionAppSlot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FunctionAppSlot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

FunctionAppSlot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettings">AuthSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference">FunctionAppSlotAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionString">ConnectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList">FunctionAppSlotConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.defaultHostname">DefaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference">FunctionAppSlotIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.outboundIpAddresses">OutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.possibleOutboundIpAddresses">PossibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference">FunctionAppSlotSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteCredential">SiteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList">FunctionAppSlotSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference">FunctionAppSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanIdInput">AppServicePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettingsInput">AppSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettingsInput">AuthSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionStringInput">ConnectionStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuotaInput">DailyMemoryTimeQuotaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLoggingInput">EnableBuiltinLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppNameInput">FunctionAppNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnlyInput">HttpsOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osTypeInput">OsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfigInput">SiteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanId">AppServicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettings">AppSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuota">DailyMemoryTimeQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLogging">EnableBuiltinLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppName">FunctionAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnly">HttpsOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthSettings`<sup>Required</sup> <a name="AuthSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettings"></a>

```csharp
public FunctionAppSlotAuthSettingsOutputReference AuthSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference">FunctionAppSlotAuthSettingsOutputReference</a>

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionString"></a>

```csharp
public FunctionAppSlotConnectionStringList ConnectionString { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList">FunctionAppSlotConnectionStringList</a>

---

##### `DefaultHostname`<sup>Required</sup> <a name="DefaultHostname" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.defaultHostname"></a>

```csharp
public string DefaultHostname { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identity"></a>

```csharp
public FunctionAppSlotIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference">FunctionAppSlotIdentityOutputReference</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `OutboundIpAddresses`<sup>Required</sup> <a name="OutboundIpAddresses" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.outboundIpAddresses"></a>

```csharp
public string OutboundIpAddresses { get; }
```

- *Type:* string

---

##### `PossibleOutboundIpAddresses`<sup>Required</sup> <a name="PossibleOutboundIpAddresses" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.possibleOutboundIpAddresses"></a>

```csharp
public string PossibleOutboundIpAddresses { get; }
```

- *Type:* string

---

##### `SiteConfig`<sup>Required</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfig"></a>

```csharp
public FunctionAppSlotSiteConfigOutputReference SiteConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference">FunctionAppSlotSiteConfigOutputReference</a>

---

##### `SiteCredential`<sup>Required</sup> <a name="SiteCredential" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteCredential"></a>

```csharp
public FunctionAppSlotSiteCredentialList SiteCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList">FunctionAppSlotSiteCredentialList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeouts"></a>

```csharp
public FunctionAppSlotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference">FunctionAppSlotTimeoutsOutputReference</a>

---

##### `AppServicePlanIdInput`<sup>Optional</sup> <a name="AppServicePlanIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanIdInput"></a>

```csharp
public string AppServicePlanIdInput { get; }
```

- *Type:* string

---

##### `AppSettingsInput`<sup>Optional</sup> <a name="AppSettingsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AuthSettingsInput`<sup>Optional</sup> <a name="AuthSettingsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettingsInput"></a>

```csharp
public FunctionAppSlotAuthSettings AuthSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionStringInput"></a>

```csharp
public object ConnectionStringInput { get; }
```

- *Type:* object

---

##### `DailyMemoryTimeQuotaInput`<sup>Optional</sup> <a name="DailyMemoryTimeQuotaInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuotaInput"></a>

```csharp
public double DailyMemoryTimeQuotaInput { get; }
```

- *Type:* double

---

##### `EnableBuiltinLoggingInput`<sup>Optional</sup> <a name="EnableBuiltinLoggingInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLoggingInput"></a>

```csharp
public object EnableBuiltinLoggingInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FunctionAppNameInput`<sup>Optional</sup> <a name="FunctionAppNameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppNameInput"></a>

```csharp
public string FunctionAppNameInput { get; }
```

- *Type:* string

---

##### `HttpsOnlyInput`<sup>Optional</sup> <a name="HttpsOnlyInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnlyInput"></a>

```csharp
public object HttpsOnlyInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identityInput"></a>

```csharp
public FunctionAppSlotIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osTypeInput"></a>

```csharp
public string OsTypeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SiteConfigInput`<sup>Optional</sup> <a name="SiteConfigInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfigInput"></a>

```csharp
public FunctionAppSlotSiteConfig SiteConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKeyInput"></a>

```csharp
public string StorageAccountAccessKeyInput { get; }
```

- *Type:* string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `AppServicePlanId`<sup>Required</sup> <a name="AppServicePlanId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanId"></a>

```csharp
public string AppServicePlanId { get; }
```

- *Type:* string

---

##### `AppSettings`<sup>Required</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DailyMemoryTimeQuota`<sup>Required</sup> <a name="DailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuota"></a>

```csharp
public double DailyMemoryTimeQuota { get; }
```

- *Type:* double

---

##### `EnableBuiltinLogging`<sup>Required</sup> <a name="EnableBuiltinLogging" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLogging"></a>

```csharp
public object EnableBuiltinLogging { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FunctionAppName`<sup>Required</sup> <a name="FunctionAppName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppName"></a>

```csharp
public string FunctionAppName { get; }
```

- *Type:* string

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnly"></a>

```csharp
public object HttpsOnly { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppSlotAuthSettings <a name="FunctionAppSlotAuthSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettings {
    object Enabled,
    FunctionAppSlotAuthSettingsActiveDirectory ActiveDirectory = null,
    System.Collections.Generic.IDictionary<string, string> AdditionalLoginParams = null,
    string[] AllowedExternalRedirectUrls = null,
    string DefaultProvider = null,
    FunctionAppSlotAuthSettingsFacebook Facebook = null,
    FunctionAppSlotAuthSettingsGoogle Google = null,
    string Issuer = null,
    FunctionAppSlotAuthSettingsMicrosoft Microsoft = null,
    string RuntimeVersion = null,
    double TokenRefreshExtensionHours = null,
    object TokenStoreEnabled = null,
    FunctionAppSlotAuthSettingsTwitter Twitter = null,
    string UnauthenticatedClientAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.additionalLoginParams">AdditionalLoginParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#additional_login_params FunctionAppSlot#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#allowed_external_redirect_urls FunctionAppSlot#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.defaultProvider">DefaultProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#default_provider FunctionAppSlot#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.facebook">Facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.google">Google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#issuer FunctionAppSlot#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.microsoft">Microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#runtime_version FunctionAppSlot#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenRefreshExtensionHours">TokenRefreshExtensionHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#token_refresh_extension_hours FunctionAppSlot#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#token_store_enabled FunctionAppSlot#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.unauthenticatedClientAction">UnauthenticatedClientAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#unauthenticated_client_action FunctionAppSlot#unauthenticated_client_action}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}.

---

##### `ActiveDirectory`<sup>Optional</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.activeDirectory"></a>

```csharp
public FunctionAppSlotAuthSettingsActiveDirectory ActiveDirectory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#active_directory FunctionAppSlot#active_directory}

---

##### `AdditionalLoginParams`<sup>Optional</sup> <a name="AdditionalLoginParams" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.additionalLoginParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalLoginParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#additional_login_params FunctionAppSlot#additional_login_params}.

---

##### `AllowedExternalRedirectUrls`<sup>Optional</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.allowedExternalRedirectUrls"></a>

```csharp
public string[] AllowedExternalRedirectUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#allowed_external_redirect_urls FunctionAppSlot#allowed_external_redirect_urls}.

---

##### `DefaultProvider`<sup>Optional</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.defaultProvider"></a>

```csharp
public string DefaultProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#default_provider FunctionAppSlot#default_provider}.

---

##### `Facebook`<sup>Optional</sup> <a name="Facebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.facebook"></a>

```csharp
public FunctionAppSlotAuthSettingsFacebook Facebook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#facebook FunctionAppSlot#facebook}

---

##### `Google`<sup>Optional</sup> <a name="Google" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.google"></a>

```csharp
public FunctionAppSlotAuthSettingsGoogle Google { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#google FunctionAppSlot#google}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#issuer FunctionAppSlot#issuer}.

---

##### `Microsoft`<sup>Optional</sup> <a name="Microsoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.microsoft"></a>

```csharp
public FunctionAppSlotAuthSettingsMicrosoft Microsoft { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#microsoft FunctionAppSlot#microsoft}

---

##### `RuntimeVersion`<sup>Optional</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#runtime_version FunctionAppSlot#runtime_version}.

---

##### `TokenRefreshExtensionHours`<sup>Optional</sup> <a name="TokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenRefreshExtensionHours"></a>

```csharp
public double TokenRefreshExtensionHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#token_refresh_extension_hours FunctionAppSlot#token_refresh_extension_hours}.

---

##### `TokenStoreEnabled`<sup>Optional</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenStoreEnabled"></a>

```csharp
public object TokenStoreEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#token_store_enabled FunctionAppSlot#token_store_enabled}.

---

##### `Twitter`<sup>Optional</sup> <a name="Twitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.twitter"></a>

```csharp
public FunctionAppSlotAuthSettingsTwitter Twitter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#twitter FunctionAppSlot#twitter}

---

##### `UnauthenticatedClientAction`<sup>Optional</sup> <a name="UnauthenticatedClientAction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.unauthenticatedClientAction"></a>

```csharp
public string UnauthenticatedClientAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#unauthenticated_client_action FunctionAppSlot#unauthenticated_client_action}.

---

### FunctionAppSlotAuthSettingsActiveDirectory <a name="FunctionAppSlotAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettingsActiveDirectory {
    string ClientId,
    string[] AllowedAudiences = null,
    string ClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#allowed_audiences FunctionAppSlot#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

##### `AllowedAudiences`<sup>Optional</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#allowed_audiences FunctionAppSlot#allowed_audiences}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

### FunctionAppSlotAuthSettingsFacebook <a name="FunctionAppSlotAuthSettingsFacebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettingsFacebook {
    string AppId,
    string AppSecret,
    string[] OauthScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appId">AppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#app_id FunctionAppSlot#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appSecret">AppSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#app_secret FunctionAppSlot#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}. |

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#app_id FunctionAppSlot#app_id}.

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appSecret"></a>

```csharp
public string AppSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#app_secret FunctionAppSlot#app_secret}.

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

### FunctionAppSlotAuthSettingsGoogle <a name="FunctionAppSlotAuthSettingsGoogle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettingsGoogle {
    string ClientId,
    string ClientSecret,
    string[] OauthScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

### FunctionAppSlotAuthSettingsMicrosoft <a name="FunctionAppSlotAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettingsMicrosoft {
    string ClientId,
    string ClientSecret,
    string[] OauthScopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

##### `OauthScopes`<sup>Optional</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

### FunctionAppSlotAuthSettingsTwitter <a name="FunctionAppSlotAuthSettingsTwitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettingsTwitter {
    string ConsumerKey,
    string ConsumerSecret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#consumer_key FunctionAppSlot#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#consumer_secret FunctionAppSlot#consumer_secret}. |

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#consumer_key FunctionAppSlot#consumer_key}.

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#consumer_secret FunctionAppSlot#consumer_secret}.

---

### FunctionAppSlotConfig <a name="FunctionAppSlotConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppServicePlanId,
    string FunctionAppName,
    string Location,
    string Name,
    string ResourceGroupName,
    string StorageAccountAccessKey,
    string StorageAccountName,
    System.Collections.Generic.IDictionary<string, string> AppSettings = null,
    FunctionAppSlotAuthSettings AuthSettings = null,
    object ConnectionString = null,
    double DailyMemoryTimeQuota = null,
    object EnableBuiltinLogging = null,
    object Enabled = null,
    object HttpsOnly = null,
    string Id = null,
    FunctionAppSlotIdentity Identity = null,
    string OsType = null,
    FunctionAppSlotSiteConfig SiteConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    FunctionAppSlotTimeouts Timeouts = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appServicePlanId">AppServicePlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#app_service_plan_id FunctionAppSlot#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.functionAppName">FunctionAppName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#function_app_name FunctionAppSlot#function_app_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#location FunctionAppSlot#location}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#resource_group_name FunctionAppSlot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#storage_account_access_key FunctionAppSlot#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#storage_account_name FunctionAppSlot#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appSettings">AppSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#app_settings FunctionAppSlot#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.authSettings">AuthSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connectionString">ConnectionString</a></code> | <code>object</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dailyMemoryTimeQuota">DailyMemoryTimeQuota</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#daily_memory_time_quota FunctionAppSlot#daily_memory_time_quota}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enableBuiltinLogging">EnableBuiltinLogging</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#enable_builtin_logging FunctionAppSlot#enable_builtin_logging}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.httpsOnly">HttpsOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#https_only FunctionAppSlot#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#id FunctionAppSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.osType">OsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#os_type FunctionAppSlot#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#tags FunctionAppSlot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#version FunctionAppSlot#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppServicePlanId`<sup>Required</sup> <a name="AppServicePlanId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appServicePlanId"></a>

```csharp
public string AppServicePlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#app_service_plan_id FunctionAppSlot#app_service_plan_id}.

---

##### `FunctionAppName`<sup>Required</sup> <a name="FunctionAppName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.functionAppName"></a>

```csharp
public string FunctionAppName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#function_app_name FunctionAppSlot#function_app_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#location FunctionAppSlot#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#resource_group_name FunctionAppSlot#resource_group_name}.

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#storage_account_access_key FunctionAppSlot#storage_account_access_key}.

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#storage_account_name FunctionAppSlot#storage_account_name}.

---

##### `AppSettings`<sup>Optional</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#app_settings FunctionAppSlot#app_settings}.

---

##### `AuthSettings`<sup>Optional</sup> <a name="AuthSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.authSettings"></a>

```csharp
public FunctionAppSlotAuthSettings AuthSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#auth_settings FunctionAppSlot#auth_settings}

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connectionString"></a>

```csharp
public object ConnectionString { get; set; }
```

- *Type:* object

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#connection_string FunctionAppSlot#connection_string}

---

##### `DailyMemoryTimeQuota`<sup>Optional</sup> <a name="DailyMemoryTimeQuota" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dailyMemoryTimeQuota"></a>

```csharp
public double DailyMemoryTimeQuota { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#daily_memory_time_quota FunctionAppSlot#daily_memory_time_quota}.

---

##### `EnableBuiltinLogging`<sup>Optional</sup> <a name="EnableBuiltinLogging" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enableBuiltinLogging"></a>

```csharp
public object EnableBuiltinLogging { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#enable_builtin_logging FunctionAppSlot#enable_builtin_logging}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}.

---

##### `HttpsOnly`<sup>Optional</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.httpsOnly"></a>

```csharp
public object HttpsOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#https_only FunctionAppSlot#https_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#id FunctionAppSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.identity"></a>

```csharp
public FunctionAppSlotIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#identity FunctionAppSlot#identity}

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.osType"></a>

```csharp
public string OsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#os_type FunctionAppSlot#os_type}.

---

##### `SiteConfig`<sup>Optional</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.siteConfig"></a>

```csharp
public FunctionAppSlotSiteConfig SiteConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#site_config FunctionAppSlot#site_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#tags FunctionAppSlot#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.timeouts"></a>

```csharp
public FunctionAppSlotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#timeouts FunctionAppSlot#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#version FunctionAppSlot#version}.

---

### FunctionAppSlotConnectionString <a name="FunctionAppSlotConnectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotConnectionString {
    string Name,
    string Type,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#type FunctionAppSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#value FunctionAppSlot#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#type FunctionAppSlot#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#value FunctionAppSlot#value}.

---

### FunctionAppSlotIdentity <a name="FunctionAppSlotIdentity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#type FunctionAppSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#identity_ids FunctionAppSlot#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#type FunctionAppSlot#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#identity_ids FunctionAppSlot#identity_ids}.

---

### FunctionAppSlotSiteConfig <a name="FunctionAppSlotSiteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfig {
    object AlwaysOn = null,
    double AppScaleLimit = null,
    string AutoSwapSlotName = null,
    FunctionAppSlotSiteConfigCors Cors = null,
    string DotnetFrameworkVersion = null,
    double ElasticInstanceMinimum = null,
    string FtpsState = null,
    string HealthCheckPath = null,
    object Http2Enabled = null,
    object IpRestriction = null,
    string JavaVersion = null,
    string LinuxFxVersion = null,
    string MinTlsVersion = null,
    double PreWarmedInstanceCount = null,
    object RuntimeScaleMonitoringEnabled = null,
    object ScmIpRestriction = null,
    string ScmType = null,
    object ScmUseMainIpRestriction = null,
    object Use32BitWorkerProcess = null,
    object VnetRouteAllEnabled = null,
    object WebsocketsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.alwaysOn">AlwaysOn</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#always_on FunctionAppSlot#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.appScaleLimit">AppScaleLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#app_scale_limit FunctionAppSlot#app_scale_limit}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.autoSwapSlotName">AutoSwapSlotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#auto_swap_slot_name FunctionAppSlot#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.dotnetFrameworkVersion">DotnetFrameworkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#dotnet_framework_version FunctionAppSlot#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#elastic_instance_minimum FunctionAppSlot#elastic_instance_minimum}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ftpsState">FtpsState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#ftps_state FunctionAppSlot#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#health_check_path FunctionAppSlot#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#http2_enabled FunctionAppSlot#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ipRestriction">IpRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#ip_restriction FunctionAppSlot#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.javaVersion">JavaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#java_version FunctionAppSlot#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#linux_fx_version FunctionAppSlot#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#min_tls_version FunctionAppSlot#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#pre_warmed_instance_count FunctionAppSlot#pre_warmed_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#runtime_scale_monitoring_enabled FunctionAppSlot#runtime_scale_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmIpRestriction">ScmIpRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#scm_ip_restriction FunctionAppSlot#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmType">ScmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#scm_type FunctionAppSlot#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#scm_use_main_ip_restriction FunctionAppSlot#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.use32BitWorkerProcess">Use32BitWorkerProcess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#use_32_bit_worker_process FunctionAppSlot#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#vnet_route_all_enabled FunctionAppSlot#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#websockets_enabled FunctionAppSlot#websockets_enabled}. |

---

##### `AlwaysOn`<sup>Optional</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.alwaysOn"></a>

```csharp
public object AlwaysOn { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#always_on FunctionAppSlot#always_on}.

---

##### `AppScaleLimit`<sup>Optional</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.appScaleLimit"></a>

```csharp
public double AppScaleLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#app_scale_limit FunctionAppSlot#app_scale_limit}.

---

##### `AutoSwapSlotName`<sup>Optional</sup> <a name="AutoSwapSlotName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.autoSwapSlotName"></a>

```csharp
public string AutoSwapSlotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#auto_swap_slot_name FunctionAppSlot#auto_swap_slot_name}.

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.cors"></a>

```csharp
public FunctionAppSlotSiteConfigCors Cors { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#cors FunctionAppSlot#cors}

---

##### `DotnetFrameworkVersion`<sup>Optional</sup> <a name="DotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.dotnetFrameworkVersion"></a>

```csharp
public string DotnetFrameworkVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#dotnet_framework_version FunctionAppSlot#dotnet_framework_version}.

---

##### `ElasticInstanceMinimum`<sup>Optional</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.elasticInstanceMinimum"></a>

```csharp
public double ElasticInstanceMinimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#elastic_instance_minimum FunctionAppSlot#elastic_instance_minimum}.

---

##### `FtpsState`<sup>Optional</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ftpsState"></a>

```csharp
public string FtpsState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#ftps_state FunctionAppSlot#ftps_state}.

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#health_check_path FunctionAppSlot#health_check_path}.

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#http2_enabled FunctionAppSlot#http2_enabled}.

---

##### `IpRestriction`<sup>Optional</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ipRestriction"></a>

```csharp
public object IpRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#ip_restriction FunctionAppSlot#ip_restriction}.

---

##### `JavaVersion`<sup>Optional</sup> <a name="JavaVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.javaVersion"></a>

```csharp
public string JavaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#java_version FunctionAppSlot#java_version}.

---

##### `LinuxFxVersion`<sup>Optional</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.linuxFxVersion"></a>

```csharp
public string LinuxFxVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#linux_fx_version FunctionAppSlot#linux_fx_version}.

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#min_tls_version FunctionAppSlot#min_tls_version}.

---

##### `PreWarmedInstanceCount`<sup>Optional</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.preWarmedInstanceCount"></a>

```csharp
public double PreWarmedInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#pre_warmed_instance_count FunctionAppSlot#pre_warmed_instance_count}.

---

##### `RuntimeScaleMonitoringEnabled`<sup>Optional</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```csharp
public object RuntimeScaleMonitoringEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#runtime_scale_monitoring_enabled FunctionAppSlot#runtime_scale_monitoring_enabled}.

---

##### `ScmIpRestriction`<sup>Optional</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmIpRestriction"></a>

```csharp
public object ScmIpRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#scm_ip_restriction FunctionAppSlot#scm_ip_restriction}.

---

##### `ScmType`<sup>Optional</sup> <a name="ScmType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmType"></a>

```csharp
public string ScmType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#scm_type FunctionAppSlot#scm_type}.

---

##### `ScmUseMainIpRestriction`<sup>Optional</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmUseMainIpRestriction"></a>

```csharp
public object ScmUseMainIpRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#scm_use_main_ip_restriction FunctionAppSlot#scm_use_main_ip_restriction}.

---

##### `Use32BitWorkerProcess`<sup>Optional</sup> <a name="Use32BitWorkerProcess" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.use32BitWorkerProcess"></a>

```csharp
public object Use32BitWorkerProcess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#use_32_bit_worker_process FunctionAppSlot#use_32_bit_worker_process}.

---

##### `VnetRouteAllEnabled`<sup>Optional</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.vnetRouteAllEnabled"></a>

```csharp
public object VnetRouteAllEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#vnet_route_all_enabled FunctionAppSlot#vnet_route_all_enabled}.

---

##### `WebsocketsEnabled`<sup>Optional</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.websocketsEnabled"></a>

```csharp
public object WebsocketsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#websockets_enabled FunctionAppSlot#websockets_enabled}.

---

### FunctionAppSlotSiteConfigCors <a name="FunctionAppSlotSiteConfigCors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigCors {
    string[] AllowedOrigins,
    object SupportCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#allowed_origins FunctionAppSlot#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.supportCredentials">SupportCredentials</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#support_credentials FunctionAppSlot#support_credentials}. |

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#allowed_origins FunctionAppSlot#allowed_origins}.

---

##### `SupportCredentials`<sup>Optional</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.supportCredentials"></a>

```csharp
public object SupportCredentials { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#support_credentials FunctionAppSlot#support_credentials}.

---

### FunctionAppSlotSiteConfigIpRestriction <a name="FunctionAppSlotSiteConfigIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigIpRestriction {
    string Action = null,
    object Headers = null,
    string IpAddress = null,
    string Name = null,
    double Priority = null,
    string ServiceTag = null,
    string VirtualNetworkSubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#action FunctionAppSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.headers">Headers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#action FunctionAppSlot#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.serviceTag"></a>

```csharp
public string ServiceTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}.

---

### FunctionAppSlotSiteConfigIpRestrictionHeaders <a name="FunctionAppSlotSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigIpRestrictionHeaders {
    string[] XAzureFdid = null,
    string[] XFdHealthProbe = null,
    string[] XForwardedFor = null,
    string[] XForwardedHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}.

---

### FunctionAppSlotSiteConfigScmIpRestriction <a name="FunctionAppSlotSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigScmIpRestriction {
    string Action = null,
    object Headers = null,
    string IpAddress = null,
    string Name = null,
    double Priority = null,
    string ServiceTag = null,
    string VirtualNetworkSubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#action FunctionAppSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.headers">Headers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#action FunctionAppSlot#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.serviceTag"></a>

```csharp
public string ServiceTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}.

---

### FunctionAppSlotSiteConfigScmIpRestrictionHeaders <a name="FunctionAppSlotSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigScmIpRestrictionHeaders {
    string[] XAzureFdid = null,
    string[] XFdHealthProbe = null,
    string[] XForwardedFor = null,
    string[] XForwardedHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}.

---

### FunctionAppSlotSiteCredential <a name="FunctionAppSlotSiteCredential" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteCredential {

};
```


### FunctionAppSlotTimeouts <a name="FunctionAppSlotTimeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#create FunctionAppSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#delete FunctionAppSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#read FunctionAppSlot#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#update FunctionAppSlot#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#create FunctionAppSlot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#delete FunctionAppSlot#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#read FunctionAppSlot#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/function_app_slot#update FunctionAppSlot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppSlotAuthSettingsActiveDirectoryOutputReference <a name="FunctionAppSlotAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettingsActiveDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">ResetAllowedAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAudiences` <a name="ResetAllowedAudiences" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```csharp
private void ResetAllowedAudiences()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">AllowedAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAudiencesInput`<sup>Optional</sup> <a name="AllowedAudiencesInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```csharp
public string[] AllowedAudiencesInput { get; }
```

- *Type:* string[]

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```csharp
public string[] AllowedAudiences { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSlotAuthSettingsActiveDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

---


### FunctionAppSlotAuthSettingsFacebookOutputReference <a name="FunctionAppSlotAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettingsFacebookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretInput">AppSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecret">AppSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `AppSecretInput`<sup>Optional</sup> <a name="AppSecretInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```csharp
public string AppSecretInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecret"></a>

```csharp
public string AppSecret { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSlotAuthSettingsFacebook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

---


### FunctionAppSlotAuthSettingsGoogleOutputReference <a name="FunctionAppSlotAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettingsGoogleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSlotAuthSettingsGoogle InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

---


### FunctionAppSlotAuthSettingsMicrosoftOutputReference <a name="FunctionAppSlotAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettingsMicrosoftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes">ResetOauthScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOauthScopes` <a name="ResetOauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```csharp
private void ResetOauthScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">OauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `OauthScopesInput`<sup>Optional</sup> <a name="OauthScopesInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```csharp
public string[] OauthScopesInput { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```csharp
public string[] OauthScopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSlotAuthSettingsMicrosoft InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

---


### FunctionAppSlotAuthSettingsOutputReference <a name="FunctionAppSlotAuthSettingsOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putActiveDirectory">PutActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putFacebook">PutFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putGoogle">PutGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putMicrosoft">PutMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putTwitter">PutTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetActiveDirectory">ResetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAdditionalLoginParams">ResetAdditionalLoginParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">ResetAllowedExternalRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetDefaultProvider">ResetDefaultProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetFacebook">ResetFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetGoogle">ResetGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetMicrosoft">ResetMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetRuntimeVersion">ResetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours">ResetTokenRefreshExtensionHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenStoreEnabled">ResetTokenStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTwitter">ResetTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction">ResetUnauthenticatedClientAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveDirectory` <a name="PutActiveDirectory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putActiveDirectory"></a>

```csharp
private void PutActiveDirectory(FunctionAppSlotAuthSettingsActiveDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

---

##### `PutFacebook` <a name="PutFacebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putFacebook"></a>

```csharp
private void PutFacebook(FunctionAppSlotAuthSettingsFacebook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putFacebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

---

##### `PutGoogle` <a name="PutGoogle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putGoogle"></a>

```csharp
private void PutGoogle(FunctionAppSlotAuthSettingsGoogle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putGoogle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

---

##### `PutMicrosoft` <a name="PutMicrosoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putMicrosoft"></a>

```csharp
private void PutMicrosoft(FunctionAppSlotAuthSettingsMicrosoft Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putMicrosoft.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

---

##### `PutTwitter` <a name="PutTwitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putTwitter"></a>

```csharp
private void PutTwitter(FunctionAppSlotAuthSettingsTwitter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putTwitter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

---

##### `ResetActiveDirectory` <a name="ResetActiveDirectory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetActiveDirectory"></a>

```csharp
private void ResetActiveDirectory()
```

##### `ResetAdditionalLoginParams` <a name="ResetAdditionalLoginParams" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```csharp
private void ResetAdditionalLoginParams()
```

##### `ResetAllowedExternalRedirectUrls` <a name="ResetAllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```csharp
private void ResetAllowedExternalRedirectUrls()
```

##### `ResetDefaultProvider` <a name="ResetDefaultProvider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetDefaultProvider"></a>

```csharp
private void ResetDefaultProvider()
```

##### `ResetFacebook` <a name="ResetFacebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetFacebook"></a>

```csharp
private void ResetFacebook()
```

##### `ResetGoogle` <a name="ResetGoogle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetGoogle"></a>

```csharp
private void ResetGoogle()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetMicrosoft` <a name="ResetMicrosoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetMicrosoft"></a>

```csharp
private void ResetMicrosoft()
```

##### `ResetRuntimeVersion` <a name="ResetRuntimeVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetRuntimeVersion"></a>

```csharp
private void ResetRuntimeVersion()
```

##### `ResetTokenRefreshExtensionHours` <a name="ResetTokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```csharp
private void ResetTokenRefreshExtensionHours()
```

##### `ResetTokenStoreEnabled` <a name="ResetTokenStoreEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```csharp
private void ResetTokenStoreEnabled()
```

##### `ResetTwitter` <a name="ResetTwitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTwitter"></a>

```csharp
private void ResetTwitter()
```

##### `ResetUnauthenticatedClientAction` <a name="ResetUnauthenticatedClientAction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```csharp
private void ResetUnauthenticatedClientAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference">FunctionAppSlotAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebook">Facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference">FunctionAppSlotAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.google">Google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference">FunctionAppSlotAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoft">Microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference">FunctionAppSlotAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference">FunctionAppSlotAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectoryInput">ActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParamsInput">AdditionalLoginParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">AllowedExternalRedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProviderInput">DefaultProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebookInput">FacebookInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.googleInput">GoogleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoftInput">MicrosoftInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">TokenRefreshExtensionHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput">TokenStoreEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitterInput">TwitterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput">UnauthenticatedClientActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParams">AdditionalLoginParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProvider">DefaultProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours">TokenRefreshExtensionHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientAction">UnauthenticatedClientAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectory"></a>

```csharp
public FunctionAppSlotAuthSettingsActiveDirectoryOutputReference ActiveDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference">FunctionAppSlotAuthSettingsActiveDirectoryOutputReference</a>

---

##### `Facebook`<sup>Required</sup> <a name="Facebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebook"></a>

```csharp
public FunctionAppSlotAuthSettingsFacebookOutputReference Facebook { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference">FunctionAppSlotAuthSettingsFacebookOutputReference</a>

---

##### `Google`<sup>Required</sup> <a name="Google" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.google"></a>

```csharp
public FunctionAppSlotAuthSettingsGoogleOutputReference Google { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference">FunctionAppSlotAuthSettingsGoogleOutputReference</a>

---

##### `Microsoft`<sup>Required</sup> <a name="Microsoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoft"></a>

```csharp
public FunctionAppSlotAuthSettingsMicrosoftOutputReference Microsoft { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference">FunctionAppSlotAuthSettingsMicrosoftOutputReference</a>

---

##### `Twitter`<sup>Required</sup> <a name="Twitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitter"></a>

```csharp
public FunctionAppSlotAuthSettingsTwitterOutputReference Twitter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference">FunctionAppSlotAuthSettingsTwitterOutputReference</a>

---

##### `ActiveDirectoryInput`<sup>Optional</sup> <a name="ActiveDirectoryInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```csharp
public FunctionAppSlotAuthSettingsActiveDirectory ActiveDirectoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

---

##### `AdditionalLoginParamsInput`<sup>Optional</sup> <a name="AdditionalLoginParamsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalLoginParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowedExternalRedirectUrlsInput`<sup>Optional</sup> <a name="AllowedExternalRedirectUrlsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```csharp
public string[] AllowedExternalRedirectUrlsInput { get; }
```

- *Type:* string[]

---

##### `DefaultProviderInput`<sup>Optional</sup> <a name="DefaultProviderInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProviderInput"></a>

```csharp
public string DefaultProviderInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FacebookInput`<sup>Optional</sup> <a name="FacebookInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebookInput"></a>

```csharp
public FunctionAppSlotAuthSettingsFacebook FacebookInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

---

##### `GoogleInput`<sup>Optional</sup> <a name="GoogleInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.googleInput"></a>

```csharp
public FunctionAppSlotAuthSettingsGoogle GoogleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `MicrosoftInput`<sup>Optional</sup> <a name="MicrosoftInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoftInput"></a>

```csharp
public FunctionAppSlotAuthSettingsMicrosoft MicrosoftInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `TokenRefreshExtensionHoursInput`<sup>Optional</sup> <a name="TokenRefreshExtensionHoursInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```csharp
public double TokenRefreshExtensionHoursInput { get; }
```

- *Type:* double

---

##### `TokenStoreEnabledInput`<sup>Optional</sup> <a name="TokenStoreEnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```csharp
public object TokenStoreEnabledInput { get; }
```

- *Type:* object

---

##### `TwitterInput`<sup>Optional</sup> <a name="TwitterInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitterInput"></a>

```csharp
public FunctionAppSlotAuthSettingsTwitter TwitterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

---

##### `UnauthenticatedClientActionInput`<sup>Optional</sup> <a name="UnauthenticatedClientActionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```csharp
public string UnauthenticatedClientActionInput { get; }
```

- *Type:* string

---

##### `AdditionalLoginParams`<sup>Required</sup> <a name="AdditionalLoginParams" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalLoginParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowedExternalRedirectUrls`<sup>Required</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```csharp
public string[] AllowedExternalRedirectUrls { get; }
```

- *Type:* string[]

---

##### `DefaultProvider`<sup>Required</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProvider"></a>

```csharp
public string DefaultProvider { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `TokenRefreshExtensionHours`<sup>Required</sup> <a name="TokenRefreshExtensionHours" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```csharp
public double TokenRefreshExtensionHours { get; }
```

- *Type:* double

---

##### `TokenStoreEnabled`<sup>Required</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```csharp
public object TokenStoreEnabled { get; }
```

- *Type:* object

---

##### `UnauthenticatedClientAction`<sup>Required</sup> <a name="UnauthenticatedClientAction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```csharp
public string UnauthenticatedClientAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSlotAuthSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

---


### FunctionAppSlotAuthSettingsTwitterOutputReference <a name="FunctionAppSlotAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotAuthSettingsTwitterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput">ConsumerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput">ConsumerSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerKeyInput`<sup>Optional</sup> <a name="ConsumerKeyInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```csharp
public string ConsumerKeyInput { get; }
```

- *Type:* string

---

##### `ConsumerSecretInput`<sup>Optional</sup> <a name="ConsumerSecretInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```csharp
public string ConsumerSecretInput { get; }
```

- *Type:* string

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSlotAuthSettingsTwitter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

---


### FunctionAppSlotConnectionStringList <a name="FunctionAppSlotConnectionStringList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotConnectionStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.get"></a>

```csharp
private FunctionAppSlotConnectionStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSlotConnectionStringOutputReference <a name="FunctionAppSlotConnectionStringOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotConnectionStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSlotIdentityOutputReference <a name="FunctionAppSlotIdentityOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSlotIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

---


### FunctionAppSlotSiteConfigCorsOutputReference <a name="FunctionAppSlotSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resetSupportCredentials">ResetSupportCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSupportCredentials` <a name="ResetSupportCredentials" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```csharp
private void ResetSupportCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentialsInput">SupportCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentials">SupportCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `SupportCredentialsInput`<sup>Optional</sup> <a name="SupportCredentialsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```csharp
public object SupportCredentialsInput { get; }
```

- *Type:* object

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `SupportCredentials`<sup>Required</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentials"></a>

```csharp
public object SupportCredentials { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSlotSiteConfigCors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

---


### FunctionAppSlotSiteConfigIpRestrictionHeadersList <a name="FunctionAppSlotSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigIpRestrictionHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.get"></a>

```csharp
private FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference <a name="FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```csharp
private void ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```csharp
private void ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```csharp
private void ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```csharp
private void ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```csharp
public string[] XAzureFdidInput { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```csharp
public string[] XFdHealthProbeInput { get; }
```

- *Type:* string[]

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```csharp
public string[] XForwardedForInput { get; }
```

- *Type:* string[]

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```csharp
public string[] XForwardedHostInput { get; }
```

- *Type:* string[]

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; }
```

- *Type:* string[]

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; }
```

- *Type:* string[]

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSlotSiteConfigIpRestrictionList <a name="FunctionAppSlotSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigIpRestrictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.get"></a>

```csharp
private FunctionAppSlotSiteConfigIpRestrictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSlotSiteConfigIpRestrictionOutputReference <a name="FunctionAppSlotSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigIpRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```csharp
private void ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```csharp
private void ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList">FunctionAppSlotSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headers"></a>

```csharp
public FunctionAppSlotSiteConfigIpRestrictionHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList">FunctionAppSlotSiteConfigIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```csharp
public string ServiceTagInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```csharp
public string VirtualNetworkSubnetIdInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```csharp
public string ServiceTag { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSlotSiteConfigOutputReference <a name="FunctionAppSlotSiteConfigOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putIpRestriction">PutIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putScmIpRestriction">PutScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAlwaysOn">ResetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAppScaleLimit">ResetAppScaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAutoSwapSlotName">ResetAutoSwapSlotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetDotnetFrameworkVersion">ResetDotnetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetElasticInstanceMinimum">ResetElasticInstanceMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetFtpsState">ResetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetIpRestriction">ResetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetJavaVersion">ResetJavaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetLinuxFxVersion">ResetLinuxFxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetPreWarmedInstanceCount">ResetPreWarmedInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">ResetRuntimeScaleMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmIpRestriction">ResetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmType">ResetScmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmUseMainIpRestriction">ResetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetUse32BitWorkerProcess">ResetUse32BitWorkerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetVnetRouteAllEnabled">ResetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetWebsocketsEnabled">ResetWebsocketsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCors` <a name="PutCors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putCors"></a>

```csharp
private void PutCors(FunctionAppSlotSiteConfigCors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

---

##### `PutIpRestriction` <a name="PutIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putIpRestriction"></a>

```csharp
private void PutIpRestriction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* object

---

##### `PutScmIpRestriction` <a name="PutScmIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putScmIpRestriction"></a>

```csharp
private void PutScmIpRestriction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* object

---

##### `ResetAlwaysOn` <a name="ResetAlwaysOn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAlwaysOn"></a>

```csharp
private void ResetAlwaysOn()
```

##### `ResetAppScaleLimit` <a name="ResetAppScaleLimit" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAppScaleLimit"></a>

```csharp
private void ResetAppScaleLimit()
```

##### `ResetAutoSwapSlotName` <a name="ResetAutoSwapSlotName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```csharp
private void ResetAutoSwapSlotName()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetCors"></a>

```csharp
private void ResetCors()
```

##### `ResetDotnetFrameworkVersion` <a name="ResetDotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```csharp
private void ResetDotnetFrameworkVersion()
```

##### `ResetElasticInstanceMinimum` <a name="ResetElasticInstanceMinimum" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```csharp
private void ResetElasticInstanceMinimum()
```

##### `ResetFtpsState` <a name="ResetFtpsState" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetFtpsState"></a>

```csharp
private void ResetFtpsState()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHealthCheckPath"></a>

```csharp
private void ResetHealthCheckPath()
```

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHttp2Enabled"></a>

```csharp
private void ResetHttp2Enabled()
```

##### `ResetIpRestriction` <a name="ResetIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetIpRestriction"></a>

```csharp
private void ResetIpRestriction()
```

##### `ResetJavaVersion` <a name="ResetJavaVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetJavaVersion"></a>

```csharp
private void ResetJavaVersion()
```

##### `ResetLinuxFxVersion` <a name="ResetLinuxFxVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetLinuxFxVersion"></a>

```csharp
private void ResetLinuxFxVersion()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetMinTlsVersion"></a>

```csharp
private void ResetMinTlsVersion()
```

##### `ResetPreWarmedInstanceCount` <a name="ResetPreWarmedInstanceCount" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```csharp
private void ResetPreWarmedInstanceCount()
```

##### `ResetRuntimeScaleMonitoringEnabled` <a name="ResetRuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```csharp
private void ResetRuntimeScaleMonitoringEnabled()
```

##### `ResetScmIpRestriction` <a name="ResetScmIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmIpRestriction"></a>

```csharp
private void ResetScmIpRestriction()
```

##### `ResetScmType` <a name="ResetScmType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmType"></a>

```csharp
private void ResetScmType()
```

##### `ResetScmUseMainIpRestriction` <a name="ResetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```csharp
private void ResetScmUseMainIpRestriction()
```

##### `ResetUse32BitWorkerProcess` <a name="ResetUse32BitWorkerProcess" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```csharp
private void ResetUse32BitWorkerProcess()
```

##### `ResetVnetRouteAllEnabled` <a name="ResetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```csharp
private void ResetVnetRouteAllEnabled()
```

##### `ResetWebsocketsEnabled` <a name="ResetWebsocketsEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```csharp
private void ResetWebsocketsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference">FunctionAppSlotSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestriction">IpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList">FunctionAppSlotSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestriction">ScmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList">FunctionAppSlotSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOnInput">AlwaysOnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimitInput">AppScaleLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotNameInput">AutoSwapSlotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.corsInput">CorsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput">DotnetFrameworkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimumInput">ElasticInstanceMinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsStateInput">FtpsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestrictionInput">IpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersionInput">JavaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersionInput">LinuxFxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCountInput">PreWarmedInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">RuntimeScaleMonitoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestrictionInput">ScmIpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmTypeInput">ScmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">ScmUseMainIpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput">Use32BitWorkerProcessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput">VnetRouteAllEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabledInput">WebsocketsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOn">AlwaysOn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimit">AppScaleLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotName">AutoSwapSlotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersion">DotnetFrameworkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsState">FtpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersion">JavaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmType">ScmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcess">Use32BitWorkerProcess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.cors"></a>

```csharp
public FunctionAppSlotSiteConfigCorsOutputReference Cors { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference">FunctionAppSlotSiteConfigCorsOutputReference</a>

---

##### `IpRestriction`<sup>Required</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestriction"></a>

```csharp
public FunctionAppSlotSiteConfigIpRestrictionList IpRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList">FunctionAppSlotSiteConfigIpRestrictionList</a>

---

##### `ScmIpRestriction`<sup>Required</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestriction"></a>

```csharp
public FunctionAppSlotSiteConfigScmIpRestrictionList ScmIpRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList">FunctionAppSlotSiteConfigScmIpRestrictionList</a>

---

##### `AlwaysOnInput`<sup>Optional</sup> <a name="AlwaysOnInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOnInput"></a>

```csharp
public object AlwaysOnInput { get; }
```

- *Type:* object

---

##### `AppScaleLimitInput`<sup>Optional</sup> <a name="AppScaleLimitInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimitInput"></a>

```csharp
public double AppScaleLimitInput { get; }
```

- *Type:* double

---

##### `AutoSwapSlotNameInput`<sup>Optional</sup> <a name="AutoSwapSlotNameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```csharp
public string AutoSwapSlotNameInput { get; }
```

- *Type:* string

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.corsInput"></a>

```csharp
public FunctionAppSlotSiteConfigCors CorsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

---

##### `DotnetFrameworkVersionInput`<sup>Optional</sup> <a name="DotnetFrameworkVersionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```csharp
public string DotnetFrameworkVersionInput { get; }
```

- *Type:* string

---

##### `ElasticInstanceMinimumInput`<sup>Optional</sup> <a name="ElasticInstanceMinimumInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```csharp
public double ElasticInstanceMinimumInput { get; }
```

- *Type:* double

---

##### `FtpsStateInput`<sup>Optional</sup> <a name="FtpsStateInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsStateInput"></a>

```csharp
public string FtpsStateInput { get; }
```

- *Type:* string

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPathInput"></a>

```csharp
public string HealthCheckPathInput { get; }
```

- *Type:* string

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2EnabledInput"></a>

```csharp
public object Http2EnabledInput { get; }
```

- *Type:* object

---

##### `IpRestrictionInput`<sup>Optional</sup> <a name="IpRestrictionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestrictionInput"></a>

```csharp
public object IpRestrictionInput { get; }
```

- *Type:* object

---

##### `JavaVersionInput`<sup>Optional</sup> <a name="JavaVersionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersionInput"></a>

```csharp
public string JavaVersionInput { get; }
```

- *Type:* string

---

##### `LinuxFxVersionInput`<sup>Optional</sup> <a name="LinuxFxVersionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```csharp
public string LinuxFxVersionInput { get; }
```

- *Type:* string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersionInput"></a>

```csharp
public string MinTlsVersionInput { get; }
```

- *Type:* string

---

##### `PreWarmedInstanceCountInput`<sup>Optional</sup> <a name="PreWarmedInstanceCountInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```csharp
public double PreWarmedInstanceCountInput { get; }
```

- *Type:* double

---

##### `RuntimeScaleMonitoringEnabledInput`<sup>Optional</sup> <a name="RuntimeScaleMonitoringEnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```csharp
public object RuntimeScaleMonitoringEnabledInput { get; }
```

- *Type:* object

---

##### `ScmIpRestrictionInput`<sup>Optional</sup> <a name="ScmIpRestrictionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```csharp
public object ScmIpRestrictionInput { get; }
```

- *Type:* object

---

##### `ScmTypeInput`<sup>Optional</sup> <a name="ScmTypeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmTypeInput"></a>

```csharp
public string ScmTypeInput { get; }
```

- *Type:* string

---

##### `ScmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="ScmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```csharp
public object ScmUseMainIpRestrictionInput { get; }
```

- *Type:* object

---

##### `Use32BitWorkerProcessInput`<sup>Optional</sup> <a name="Use32BitWorkerProcessInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```csharp
public object Use32BitWorkerProcessInput { get; }
```

- *Type:* object

---

##### `VnetRouteAllEnabledInput`<sup>Optional</sup> <a name="VnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```csharp
public object VnetRouteAllEnabledInput { get; }
```

- *Type:* object

---

##### `WebsocketsEnabledInput`<sup>Optional</sup> <a name="WebsocketsEnabledInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```csharp
public object WebsocketsEnabledInput { get; }
```

- *Type:* object

---

##### `AlwaysOn`<sup>Required</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOn"></a>

```csharp
public object AlwaysOn { get; }
```

- *Type:* object

---

##### `AppScaleLimit`<sup>Required</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimit"></a>

```csharp
public double AppScaleLimit { get; }
```

- *Type:* double

---

##### `AutoSwapSlotName`<sup>Required</sup> <a name="AutoSwapSlotName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotName"></a>

```csharp
public string AutoSwapSlotName { get; }
```

- *Type:* string

---

##### `DotnetFrameworkVersion`<sup>Required</sup> <a name="DotnetFrameworkVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```csharp
public string DotnetFrameworkVersion { get; }
```

- *Type:* string

---

##### `ElasticInstanceMinimum`<sup>Required</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```csharp
public double ElasticInstanceMinimum { get; }
```

- *Type:* double

---

##### `FtpsState`<sup>Required</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsState"></a>

```csharp
public string FtpsState { get; }
```

- *Type:* string

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; }
```

- *Type:* string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; }
```

- *Type:* object

---

##### `JavaVersion`<sup>Required</sup> <a name="JavaVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersion"></a>

```csharp
public string JavaVersion { get; }
```

- *Type:* string

---

##### `LinuxFxVersion`<sup>Required</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersion"></a>

```csharp
public string LinuxFxVersion { get; }
```

- *Type:* string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; }
```

- *Type:* string

---

##### `PreWarmedInstanceCount`<sup>Required</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```csharp
public double PreWarmedInstanceCount { get; }
```

- *Type:* double

---

##### `RuntimeScaleMonitoringEnabled`<sup>Required</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```csharp
public object RuntimeScaleMonitoringEnabled { get; }
```

- *Type:* object

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmType"></a>

```csharp
public string ScmType { get; }
```

- *Type:* string

---

##### `ScmUseMainIpRestriction`<sup>Required</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```csharp
public object ScmUseMainIpRestriction { get; }
```

- *Type:* object

---

##### `Use32BitWorkerProcess`<sup>Required</sup> <a name="Use32BitWorkerProcess" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```csharp
public object Use32BitWorkerProcess { get; }
```

- *Type:* object

---

##### `VnetRouteAllEnabled`<sup>Required</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```csharp
public object VnetRouteAllEnabled { get; }
```

- *Type:* object

---

##### `WebsocketsEnabled`<sup>Required</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabled"></a>

```csharp
public object WebsocketsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSlotSiteConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

---


### FunctionAppSlotSiteConfigScmIpRestrictionHeadersList <a name="FunctionAppSlotSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigScmIpRestrictionHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get"></a>

```csharp
private FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference <a name="FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```csharp
private void ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```csharp
private void ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```csharp
private void ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```csharp
private void ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```csharp
public string[] XAzureFdidInput { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```csharp
public string[] XFdHealthProbeInput { get; }
```

- *Type:* string[]

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```csharp
public string[] XForwardedForInput { get; }
```

- *Type:* string[]

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```csharp
public string[] XForwardedHostInput { get; }
```

- *Type:* string[]

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; }
```

- *Type:* string[]

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; }
```

- *Type:* string[]

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSlotSiteConfigScmIpRestrictionList <a name="FunctionAppSlotSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigScmIpRestrictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.get"></a>

```csharp
private FunctionAppSlotSiteConfigScmIpRestrictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSlotSiteConfigScmIpRestrictionOutputReference <a name="FunctionAppSlotSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteConfigScmIpRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```csharp
private void ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```csharp
private void ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList">FunctionAppSlotSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```csharp
public FunctionAppSlotSiteConfigScmIpRestrictionHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList">FunctionAppSlotSiteConfigScmIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```csharp
public string ServiceTagInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```csharp
public string VirtualNetworkSubnetIdInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```csharp
public string ServiceTag { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FunctionAppSlotSiteCredentialList <a name="FunctionAppSlotSiteCredentialList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.get"></a>

```csharp
private FunctionAppSlotSiteCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FunctionAppSlotSiteCredentialOutputReference <a name="FunctionAppSlotSiteCredentialOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotSiteCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential">FunctionAppSlotSiteCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.internalValue"></a>

```csharp
public FunctionAppSlotSiteCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential">FunctionAppSlotSiteCredential</a>

---


### FunctionAppSlotTimeoutsOutputReference <a name="FunctionAppSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new FunctionAppSlotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



