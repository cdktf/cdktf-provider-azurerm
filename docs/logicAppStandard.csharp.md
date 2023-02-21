# `logicAppStandard` Submodule <a name="`logicAppStandard` Submodule" id="@cdktf/provider-azurerm.logicAppStandard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppStandard <a name="LogicAppStandard" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard azurerm_logic_app_standard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandard(Construct Scope, string Id, LogicAppStandardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig">LogicAppStandardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig">LogicAppStandardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString">PutConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig">PutSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetAppSettings">ResetAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetBundleVersion">ResetBundleVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientAffinityEnabled">ResetClientAffinityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientCertificateMode">ResetClientCertificateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetHttpsOnly">ResetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetSiteConfig">ResetSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetStorageAccountShareName">ResetStorageAccountShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetUseExtensionBundle">ResetUseExtensionBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConnectionString` <a name="PutConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString"></a>

```csharp
private void PutConnectionString(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putConnectionString.parameter.value"></a>

- *Type:* object

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity"></a>

```csharp
private void PutIdentity(LogicAppStandardIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

---

##### `PutSiteConfig` <a name="PutSiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig"></a>

```csharp
private void PutSiteConfig(LogicAppStandardSiteConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putSiteConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts"></a>

```csharp
private void PutTimeouts(LogicAppStandardTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>

---

##### `ResetAppSettings` <a name="ResetAppSettings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetAppSettings"></a>

```csharp
private void ResetAppSettings()
```

##### `ResetBundleVersion` <a name="ResetBundleVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetBundleVersion"></a>

```csharp
private void ResetBundleVersion()
```

##### `ResetClientAffinityEnabled` <a name="ResetClientAffinityEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientAffinityEnabled"></a>

```csharp
private void ResetClientAffinityEnabled()
```

##### `ResetClientCertificateMode` <a name="ResetClientCertificateMode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetClientCertificateMode"></a>

```csharp
private void ResetClientCertificateMode()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHttpsOnly` <a name="ResetHttpsOnly" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetHttpsOnly"></a>

```csharp
private void ResetHttpsOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetSiteConfig` <a name="ResetSiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetSiteConfig"></a>

```csharp
private void ResetSiteConfig()
```

##### `ResetStorageAccountShareName` <a name="ResetStorageAccountShareName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetStorageAccountShareName"></a>

```csharp
private void ResetStorageAccountShareName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseExtensionBundle` <a name="ResetUseExtensionBundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetUseExtensionBundle"></a>

```csharp
private void ResetUseExtensionBundle()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.resetVirtualNetworkSubnetId"></a>

```csharp
private void ResetVirtualNetworkSubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppStandard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppStandard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppStandard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionString">ConnectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList">LogicAppStandardConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.customDomainVerificationId">CustomDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.defaultHostname">DefaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference">LogicAppStandardIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.outboundIpAddresses">OutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.possibleOutboundIpAddresses">PossibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference">LogicAppStandardSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteCredential">SiteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList">LogicAppStandardSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference">LogicAppStandardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanIdInput">AppServicePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettingsInput">AppSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersionInput">BundleVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabledInput">ClientAffinityEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateModeInput">ClientCertificateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionStringInput">ConnectionStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnlyInput">HttpsOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfigInput">SiteConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareNameInput">StorageAccountShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundleInput">UseExtensionBundleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanId">AppServicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettings">AppSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersion">BundleVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabled">ClientAffinityEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateMode">ClientCertificateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnly">HttpsOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareName">StorageAccountShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundle">UseExtensionBundle</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionString"></a>

```csharp
public LogicAppStandardConnectionStringList ConnectionString { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList">LogicAppStandardConnectionStringList</a>

---

##### `CustomDomainVerificationId`<sup>Required</sup> <a name="CustomDomainVerificationId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.customDomainVerificationId"></a>

```csharp
public string CustomDomainVerificationId { get; }
```

- *Type:* string

---

##### `DefaultHostname`<sup>Required</sup> <a name="DefaultHostname" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.defaultHostname"></a>

```csharp
public string DefaultHostname { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identity"></a>

```csharp
public LogicAppStandardIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference">LogicAppStandardIdentityOutputReference</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `OutboundIpAddresses`<sup>Required</sup> <a name="OutboundIpAddresses" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.outboundIpAddresses"></a>

```csharp
public string OutboundIpAddresses { get; }
```

- *Type:* string

---

##### `PossibleOutboundIpAddresses`<sup>Required</sup> <a name="PossibleOutboundIpAddresses" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.possibleOutboundIpAddresses"></a>

```csharp
public string PossibleOutboundIpAddresses { get; }
```

- *Type:* string

---

##### `SiteConfig`<sup>Required</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfig"></a>

```csharp
public LogicAppStandardSiteConfigOutputReference SiteConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference">LogicAppStandardSiteConfigOutputReference</a>

---

##### `SiteCredential`<sup>Required</sup> <a name="SiteCredential" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteCredential"></a>

```csharp
public LogicAppStandardSiteCredentialList SiteCredential { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList">LogicAppStandardSiteCredentialList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeouts"></a>

```csharp
public LogicAppStandardTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference">LogicAppStandardTimeoutsOutputReference</a>

---

##### `AppServicePlanIdInput`<sup>Optional</sup> <a name="AppServicePlanIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanIdInput"></a>

```csharp
public string AppServicePlanIdInput { get; }
```

- *Type:* string

---

##### `AppSettingsInput`<sup>Optional</sup> <a name="AppSettingsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BundleVersionInput`<sup>Optional</sup> <a name="BundleVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersionInput"></a>

```csharp
public string BundleVersionInput { get; }
```

- *Type:* string

---

##### `ClientAffinityEnabledInput`<sup>Optional</sup> <a name="ClientAffinityEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabledInput"></a>

```csharp
public object ClientAffinityEnabledInput { get; }
```

- *Type:* object

---

##### `ClientCertificateModeInput`<sup>Optional</sup> <a name="ClientCertificateModeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateModeInput"></a>

```csharp
public string ClientCertificateModeInput { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.connectionStringInput"></a>

```csharp
public object ConnectionStringInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HttpsOnlyInput`<sup>Optional</sup> <a name="HttpsOnlyInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnlyInput"></a>

```csharp
public object HttpsOnlyInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.identityInput"></a>

```csharp
public LogicAppStandardIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SiteConfigInput`<sup>Optional</sup> <a name="SiteConfigInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.siteConfigInput"></a>

```csharp
public LogicAppStandardSiteConfig SiteConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKeyInput"></a>

```csharp
public string StorageAccountAccessKeyInput { get; }
```

- *Type:* string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountShareNameInput`<sup>Optional</sup> <a name="StorageAccountShareNameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareNameInput"></a>

```csharp
public string StorageAccountShareNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UseExtensionBundleInput`<sup>Optional</sup> <a name="UseExtensionBundleInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundleInput"></a>

```csharp
public object UseExtensionBundleInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetIdInput"></a>

```csharp
public string VirtualNetworkSubnetIdInput { get; }
```

- *Type:* string

---

##### `AppServicePlanId`<sup>Required</sup> <a name="AppServicePlanId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appServicePlanId"></a>

```csharp
public string AppServicePlanId { get; }
```

- *Type:* string

---

##### `AppSettings`<sup>Required</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.appSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BundleVersion`<sup>Required</sup> <a name="BundleVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.bundleVersion"></a>

```csharp
public string BundleVersion { get; }
```

- *Type:* string

---

##### `ClientAffinityEnabled`<sup>Required</sup> <a name="ClientAffinityEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientAffinityEnabled"></a>

```csharp
public object ClientAffinityEnabled { get; }
```

- *Type:* object

---

##### `ClientCertificateMode`<sup>Required</sup> <a name="ClientCertificateMode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.clientCertificateMode"></a>

```csharp
public string ClientCertificateMode { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.httpsOnly"></a>

```csharp
public object HttpsOnly { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `StorageAccountShareName`<sup>Required</sup> <a name="StorageAccountShareName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.storageAccountShareName"></a>

```csharp
public string StorageAccountShareName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseExtensionBundle`<sup>Required</sup> <a name="UseExtensionBundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.useExtensionBundle"></a>

```csharp
public object UseExtensionBundle { get; }
```

- *Type:* object

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppStandardConfig <a name="LogicAppStandardConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppServicePlanId,
    string Location,
    string Name,
    string ResourceGroupName,
    string StorageAccountAccessKey,
    string StorageAccountName,
    System.Collections.Generic.IDictionary<string, string> AppSettings = null,
    string BundleVersion = null,
    object ClientAffinityEnabled = null,
    string ClientCertificateMode = null,
    object ConnectionString = null,
    object Enabled = null,
    object HttpsOnly = null,
    string Id = null,
    LogicAppStandardIdentity Identity = null,
    LogicAppStandardSiteConfig SiteConfig = null,
    string StorageAccountShareName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    LogicAppStandardTimeouts Timeouts = null,
    object UseExtensionBundle = null,
    string Version = null,
    string VirtualNetworkSubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appServicePlanId">AppServicePlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#location LogicAppStandard#location}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appSettings">AppSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#app_settings LogicAppStandard#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.bundleVersion">BundleVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#bundle_version LogicAppStandard#bundle_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientAffinityEnabled">ClientAffinityEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientCertificateMode">ClientCertificateMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connectionString">ConnectionString</a></code> | <code>object</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#enabled LogicAppStandard#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.httpsOnly">HttpsOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#https_only LogicAppStandard#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#id LogicAppStandard#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountShareName">StorageAccountShareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#tags LogicAppStandard#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.useExtensionBundle">UseExtensionBundle</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#version LogicAppStandard#version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppServicePlanId`<sup>Required</sup> <a name="AppServicePlanId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appServicePlanId"></a>

```csharp
public string AppServicePlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#app_service_plan_id LogicAppStandard#app_service_plan_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#location LogicAppStandard#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#name LogicAppStandard#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#resource_group_name LogicAppStandard#resource_group_name}.

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#storage_account_access_key LogicAppStandard#storage_account_access_key}.

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#storage_account_name LogicAppStandard#storage_account_name}.

---

##### `AppSettings`<sup>Optional</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.appSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AppSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#app_settings LogicAppStandard#app_settings}.

---

##### `BundleVersion`<sup>Optional</sup> <a name="BundleVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.bundleVersion"></a>

```csharp
public string BundleVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#bundle_version LogicAppStandard#bundle_version}.

---

##### `ClientAffinityEnabled`<sup>Optional</sup> <a name="ClientAffinityEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientAffinityEnabled"></a>

```csharp
public object ClientAffinityEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#client_affinity_enabled LogicAppStandard#client_affinity_enabled}.

---

##### `ClientCertificateMode`<sup>Optional</sup> <a name="ClientCertificateMode" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.clientCertificateMode"></a>

```csharp
public string ClientCertificateMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#client_certificate_mode LogicAppStandard#client_certificate_mode}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.connectionString"></a>

```csharp
public object ConnectionString { get; set; }
```

- *Type:* object

connection_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#connection_string LogicAppStandard#connection_string}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#enabled LogicAppStandard#enabled}.

---

##### `HttpsOnly`<sup>Optional</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.httpsOnly"></a>

```csharp
public object HttpsOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#https_only LogicAppStandard#https_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#id LogicAppStandard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.identity"></a>

```csharp
public LogicAppStandardIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#identity LogicAppStandard#identity}

---

##### `SiteConfig`<sup>Optional</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.siteConfig"></a>

```csharp
public LogicAppStandardSiteConfig SiteConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#site_config LogicAppStandard#site_config}

---

##### `StorageAccountShareName`<sup>Optional</sup> <a name="StorageAccountShareName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.storageAccountShareName"></a>

```csharp
public string StorageAccountShareName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#storage_account_share_name LogicAppStandard#storage_account_share_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#tags LogicAppStandard#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.timeouts"></a>

```csharp
public LogicAppStandardTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts">LogicAppStandardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#timeouts LogicAppStandard#timeouts}

---

##### `UseExtensionBundle`<sup>Optional</sup> <a name="UseExtensionBundle" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.useExtensionBundle"></a>

```csharp
public object UseExtensionBundle { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#use_extension_bundle LogicAppStandard#use_extension_bundle}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#version LogicAppStandard#version}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConfig.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

### LogicAppStandardConnectionString <a name="LogicAppStandardConnectionString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardConnectionString {
    string Name,
    string Type,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#type LogicAppStandard#type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#value LogicAppStandard#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#name LogicAppStandard#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#type LogicAppStandard#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionString.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#value LogicAppStandard#value}.

---

### LogicAppStandardIdentity <a name="LogicAppStandardIdentity" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#type LogicAppStandard#type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#identity_ids LogicAppStandard#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#type LogicAppStandard#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#identity_ids LogicAppStandard#identity_ids}.

---

### LogicAppStandardSiteConfig <a name="LogicAppStandardSiteConfig" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfig {
    object AlwaysOn = null,
    double AppScaleLimit = null,
    LogicAppStandardSiteConfigCors Cors = null,
    string DotnetFrameworkVersion = null,
    double ElasticInstanceMinimum = null,
    string FtpsState = null,
    string HealthCheckPath = null,
    object Http2Enabled = null,
    object IpRestriction = null,
    string LinuxFxVersion = null,
    string MinTlsVersion = null,
    double PreWarmedInstanceCount = null,
    object RuntimeScaleMonitoringEnabled = null,
    object ScmIpRestriction = null,
    string ScmMinTlsVersion = null,
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
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.alwaysOn">AlwaysOn</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#always_on LogicAppStandard#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.appScaleLimit">AppScaleLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#app_scale_limit LogicAppStandard#app_scale_limit}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.dotnetFrameworkVersion">DotnetFrameworkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#dotnet_framework_version LogicAppStandard#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#elastic_instance_minimum LogicAppStandard#elastic_instance_minimum}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ftpsState">FtpsState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#ftps_state LogicAppStandard#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#health_check_path LogicAppStandard#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#http2_enabled LogicAppStandard#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ipRestriction">IpRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#ip_restriction LogicAppStandard#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#linux_fx_version LogicAppStandard#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#min_tls_version LogicAppStandard#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#pre_warmed_instance_count LogicAppStandard#pre_warmed_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#runtime_scale_monitoring_enabled LogicAppStandard#runtime_scale_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmIpRestriction">ScmIpRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#scm_ip_restriction LogicAppStandard#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmMinTlsVersion">ScmMinTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#scm_min_tls_version LogicAppStandard#scm_min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmType">ScmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#scm_type LogicAppStandard#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#scm_use_main_ip_restriction LogicAppStandard#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.use32BitWorkerProcess">Use32BitWorkerProcess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#use_32_bit_worker_process LogicAppStandard#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#vnet_route_all_enabled LogicAppStandard#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#websockets_enabled LogicAppStandard#websockets_enabled}. |

---

##### `AlwaysOn`<sup>Optional</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.alwaysOn"></a>

```csharp
public object AlwaysOn { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#always_on LogicAppStandard#always_on}.

---

##### `AppScaleLimit`<sup>Optional</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.appScaleLimit"></a>

```csharp
public double AppScaleLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#app_scale_limit LogicAppStandard#app_scale_limit}.

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.cors"></a>

```csharp
public LogicAppStandardSiteConfigCors Cors { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#cors LogicAppStandard#cors}

---

##### `DotnetFrameworkVersion`<sup>Optional</sup> <a name="DotnetFrameworkVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.dotnetFrameworkVersion"></a>

```csharp
public string DotnetFrameworkVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#dotnet_framework_version LogicAppStandard#dotnet_framework_version}.

---

##### `ElasticInstanceMinimum`<sup>Optional</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.elasticInstanceMinimum"></a>

```csharp
public double ElasticInstanceMinimum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#elastic_instance_minimum LogicAppStandard#elastic_instance_minimum}.

---

##### `FtpsState`<sup>Optional</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ftpsState"></a>

```csharp
public string FtpsState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#ftps_state LogicAppStandard#ftps_state}.

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#health_check_path LogicAppStandard#health_check_path}.

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#http2_enabled LogicAppStandard#http2_enabled}.

---

##### `IpRestriction`<sup>Optional</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.ipRestriction"></a>

```csharp
public object IpRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#ip_restriction LogicAppStandard#ip_restriction}.

---

##### `LinuxFxVersion`<sup>Optional</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.linuxFxVersion"></a>

```csharp
public string LinuxFxVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#linux_fx_version LogicAppStandard#linux_fx_version}.

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#min_tls_version LogicAppStandard#min_tls_version}.

---

##### `PreWarmedInstanceCount`<sup>Optional</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.preWarmedInstanceCount"></a>

```csharp
public double PreWarmedInstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#pre_warmed_instance_count LogicAppStandard#pre_warmed_instance_count}.

---

##### `RuntimeScaleMonitoringEnabled`<sup>Optional</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```csharp
public object RuntimeScaleMonitoringEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#runtime_scale_monitoring_enabled LogicAppStandard#runtime_scale_monitoring_enabled}.

---

##### `ScmIpRestriction`<sup>Optional</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmIpRestriction"></a>

```csharp
public object ScmIpRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#scm_ip_restriction LogicAppStandard#scm_ip_restriction}.

---

##### `ScmMinTlsVersion`<sup>Optional</sup> <a name="ScmMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmMinTlsVersion"></a>

```csharp
public string ScmMinTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#scm_min_tls_version LogicAppStandard#scm_min_tls_version}.

---

##### `ScmType`<sup>Optional</sup> <a name="ScmType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmType"></a>

```csharp
public string ScmType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#scm_type LogicAppStandard#scm_type}.

---

##### `ScmUseMainIpRestriction`<sup>Optional</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.scmUseMainIpRestriction"></a>

```csharp
public object ScmUseMainIpRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#scm_use_main_ip_restriction LogicAppStandard#scm_use_main_ip_restriction}.

---

##### `Use32BitWorkerProcess`<sup>Optional</sup> <a name="Use32BitWorkerProcess" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.use32BitWorkerProcess"></a>

```csharp
public object Use32BitWorkerProcess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#use_32_bit_worker_process LogicAppStandard#use_32_bit_worker_process}.

---

##### `VnetRouteAllEnabled`<sup>Optional</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.vnetRouteAllEnabled"></a>

```csharp
public object VnetRouteAllEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#vnet_route_all_enabled LogicAppStandard#vnet_route_all_enabled}.

---

##### `WebsocketsEnabled`<sup>Optional</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig.property.websocketsEnabled"></a>

```csharp
public object WebsocketsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#websockets_enabled LogicAppStandard#websockets_enabled}.

---

### LogicAppStandardSiteConfigCors <a name="LogicAppStandardSiteConfigCors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigCors {
    string[] AllowedOrigins,
    object SupportCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#allowed_origins LogicAppStandard#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.supportCredentials">SupportCredentials</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#support_credentials LogicAppStandard#support_credentials}. |

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#allowed_origins LogicAppStandard#allowed_origins}.

---

##### `SupportCredentials`<sup>Optional</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors.property.supportCredentials"></a>

```csharp
public object SupportCredentials { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#support_credentials LogicAppStandard#support_credentials}.

---

### LogicAppStandardSiteConfigIpRestriction <a name="LogicAppStandardSiteConfigIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigIpRestriction {
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
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#action LogicAppStandard#action}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.headers">Headers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#headers LogicAppStandard#headers}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#ip_address LogicAppStandard#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#priority LogicAppStandard#priority}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#service_tag LogicAppStandard#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#action LogicAppStandard#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#headers LogicAppStandard#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#ip_address LogicAppStandard#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#name LogicAppStandard#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#priority LogicAppStandard#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.serviceTag"></a>

```csharp
public string ServiceTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#service_tag LogicAppStandard#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

### LogicAppStandardSiteConfigIpRestrictionHeaders <a name="LogicAppStandardSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigIpRestrictionHeaders {
    string[] XAzureFdid = null,
    string[] XFdHealthProbe = null,
    string[] XForwardedFor = null,
    string[] XForwardedHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}.

---

### LogicAppStandardSiteConfigScmIpRestriction <a name="LogicAppStandardSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigScmIpRestriction {
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
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#action LogicAppStandard#action}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.headers">Headers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#headers LogicAppStandard#headers}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#ip_address LogicAppStandard#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#name LogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#priority LogicAppStandard#priority}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.serviceTag">ServiceTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#service_tag LogicAppStandard#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#action LogicAppStandard#action}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#headers LogicAppStandard#headers}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#ip_address LogicAppStandard#ip_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#name LogicAppStandard#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#priority LogicAppStandard#priority}.

---

##### `ServiceTag`<sup>Optional</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.serviceTag"></a>

```csharp
public string ServiceTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#service_tag LogicAppStandard#service_tag}.

---

##### `VirtualNetworkSubnetId`<sup>Optional</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#virtual_network_subnet_id LogicAppStandard#virtual_network_subnet_id}.

---

### LogicAppStandardSiteConfigScmIpRestrictionHeaders <a name="LogicAppStandardSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigScmIpRestrictionHeaders {
    string[] XAzureFdid = null,
    string[] XFdHealthProbe = null,
    string[] XForwardedFor = null,
    string[] XForwardedHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}. |

---

##### `XAzureFdid`<sup>Optional</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_azure_fdid LogicAppStandard#x_azure_fdid}.

---

##### `XFdHealthProbe`<sup>Optional</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_fd_health_probe LogicAppStandard#x_fd_health_probe}.

---

##### `XForwardedFor`<sup>Optional</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_forwarded_for LogicAppStandard#x_forwarded_for}.

---

##### `XForwardedHost`<sup>Optional</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#x_forwarded_host LogicAppStandard#x_forwarded_host}.

---

### LogicAppStandardSiteCredential <a name="LogicAppStandardSiteCredential" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteCredential {

};
```


### LogicAppStandardTimeouts <a name="LogicAppStandardTimeouts" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#create LogicAppStandard#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#delete LogicAppStandard#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#read LogicAppStandard#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#update LogicAppStandard#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#create LogicAppStandard#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#delete LogicAppStandard#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#read LogicAppStandard#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_standard#update LogicAppStandard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppStandardConnectionStringList <a name="LogicAppStandardConnectionStringList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardConnectionStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get"></a>

```csharp
private LogicAppStandardConnectionStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppStandardConnectionStringOutputReference <a name="LogicAppStandardConnectionStringOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardConnectionStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardConnectionStringOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppStandardIdentityOutputReference <a name="LogicAppStandardIdentityOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentityOutputReference.property.internalValue"></a>

```csharp
public LogicAppStandardIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardIdentity">LogicAppStandardIdentity</a>

---


### LogicAppStandardSiteConfigCorsOutputReference <a name="LogicAppStandardSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resetSupportCredentials">ResetSupportCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSupportCredentials` <a name="ResetSupportCredentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```csharp
private void ResetSupportCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentialsInput">SupportCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials">SupportCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `SupportCredentialsInput`<sup>Optional</sup> <a name="SupportCredentialsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```csharp
public object SupportCredentialsInput { get; }
```

- *Type:* object

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `SupportCredentials`<sup>Required</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials"></a>

```csharp
public object SupportCredentials { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference.property.internalValue"></a>

```csharp
public LogicAppStandardSiteConfigCors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

---


### LogicAppStandardSiteConfigIpRestrictionHeadersList <a name="LogicAppStandardSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigIpRestrictionHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get"></a>

```csharp
private LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference <a name="LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```csharp
private void ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```csharp
private void ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```csharp
private void ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```csharp
private void ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```csharp
public string[] XAzureFdidInput { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```csharp
public string[] XFdHealthProbeInput { get; }
```

- *Type:* string[]

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```csharp
public string[] XForwardedForInput { get; }
```

- *Type:* string[]

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```csharp
public string[] XForwardedHostInput { get; }
```

- *Type:* string[]

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; }
```

- *Type:* string[]

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; }
```

- *Type:* string[]

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppStandardSiteConfigIpRestrictionList <a name="LogicAppStandardSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigIpRestrictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get"></a>

```csharp
private LogicAppStandardSiteConfigIpRestrictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppStandardSiteConfigIpRestrictionOutputReference <a name="LogicAppStandardSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigIpRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```csharp
private void ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```csharp
private void ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList">LogicAppStandardSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers"></a>

```csharp
public LogicAppStandardSiteConfigIpRestrictionHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionHeadersList">LogicAppStandardSiteConfigIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```csharp
public string ServiceTagInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```csharp
public string VirtualNetworkSubnetIdInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```csharp
public string ServiceTag { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppStandardSiteConfigOutputReference <a name="LogicAppStandardSiteConfigOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction">PutIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction">PutScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAlwaysOn">ResetAlwaysOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAppScaleLimit">ResetAppScaleLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetCors">ResetCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetDotnetFrameworkVersion">ResetDotnetFrameworkVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetElasticInstanceMinimum">ResetElasticInstanceMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetFtpsState">ResetFtpsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetIpRestriction">ResetIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetLinuxFxVersion">ResetLinuxFxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPreWarmedInstanceCount">ResetPreWarmedInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">ResetRuntimeScaleMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmIpRestriction">ResetScmIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmMinTlsVersion">ResetScmMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmType">ResetScmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmUseMainIpRestriction">ResetScmUseMainIpRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetUse32BitWorkerProcess">ResetUse32BitWorkerProcess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetVnetRouteAllEnabled">ResetVnetRouteAllEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetWebsocketsEnabled">ResetWebsocketsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCors` <a name="PutCors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors"></a>

```csharp
private void PutCors(LogicAppStandardSiteConfigCors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

---

##### `PutIpRestriction` <a name="PutIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction"></a>

```csharp
private void PutIpRestriction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* object

---

##### `PutScmIpRestriction` <a name="PutScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction"></a>

```csharp
private void PutScmIpRestriction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* object

---

##### `ResetAlwaysOn` <a name="ResetAlwaysOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAlwaysOn"></a>

```csharp
private void ResetAlwaysOn()
```

##### `ResetAppScaleLimit` <a name="ResetAppScaleLimit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetAppScaleLimit"></a>

```csharp
private void ResetAppScaleLimit()
```

##### `ResetCors` <a name="ResetCors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetCors"></a>

```csharp
private void ResetCors()
```

##### `ResetDotnetFrameworkVersion` <a name="ResetDotnetFrameworkVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```csharp
private void ResetDotnetFrameworkVersion()
```

##### `ResetElasticInstanceMinimum` <a name="ResetElasticInstanceMinimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```csharp
private void ResetElasticInstanceMinimum()
```

##### `ResetFtpsState` <a name="ResetFtpsState" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetFtpsState"></a>

```csharp
private void ResetFtpsState()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHealthCheckPath"></a>

```csharp
private void ResetHealthCheckPath()
```

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetHttp2Enabled"></a>

```csharp
private void ResetHttp2Enabled()
```

##### `ResetIpRestriction` <a name="ResetIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetIpRestriction"></a>

```csharp
private void ResetIpRestriction()
```

##### `ResetLinuxFxVersion` <a name="ResetLinuxFxVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetLinuxFxVersion"></a>

```csharp
private void ResetLinuxFxVersion()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetMinTlsVersion"></a>

```csharp
private void ResetMinTlsVersion()
```

##### `ResetPreWarmedInstanceCount` <a name="ResetPreWarmedInstanceCount" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```csharp
private void ResetPreWarmedInstanceCount()
```

##### `ResetRuntimeScaleMonitoringEnabled` <a name="ResetRuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```csharp
private void ResetRuntimeScaleMonitoringEnabled()
```

##### `ResetScmIpRestriction` <a name="ResetScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmIpRestriction"></a>

```csharp
private void ResetScmIpRestriction()
```

##### `ResetScmMinTlsVersion` <a name="ResetScmMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmMinTlsVersion"></a>

```csharp
private void ResetScmMinTlsVersion()
```

##### `ResetScmType` <a name="ResetScmType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmType"></a>

```csharp
private void ResetScmType()
```

##### `ResetScmUseMainIpRestriction` <a name="ResetScmUseMainIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```csharp
private void ResetScmUseMainIpRestriction()
```

##### `ResetUse32BitWorkerProcess` <a name="ResetUse32BitWorkerProcess" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```csharp
private void ResetUse32BitWorkerProcess()
```

##### `ResetVnetRouteAllEnabled` <a name="ResetVnetRouteAllEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```csharp
private void ResetVnetRouteAllEnabled()
```

##### `ResetWebsocketsEnabled` <a name="ResetWebsocketsEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```csharp
private void ResetWebsocketsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference">LogicAppStandardSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestriction">IpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList">LogicAppStandardSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestriction">ScmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList">LogicAppStandardSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOnInput">AlwaysOnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimitInput">AppScaleLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.corsInput">CorsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersionInput">DotnetFrameworkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimumInput">ElasticInstanceMinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsStateInput">FtpsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestrictionInput">IpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersionInput">LinuxFxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCountInput">PreWarmedInstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">RuntimeScaleMonitoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestrictionInput">ScmIpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersionInput">ScmMinTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmTypeInput">ScmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">ScmUseMainIpRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcessInput">Use32BitWorkerProcessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabledInput">VnetRouteAllEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabledInput">WebsocketsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOn">AlwaysOn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimit">AppScaleLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion">DotnetFrameworkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsState">FtpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersion">LinuxFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion">ScmMinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmType">ScmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess">Use32BitWorkerProcess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.cors"></a>

```csharp
public LogicAppStandardSiteConfigCorsOutputReference Cors { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCorsOutputReference">LogicAppStandardSiteConfigCorsOutputReference</a>

---

##### `IpRestriction`<sup>Required</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestriction"></a>

```csharp
public LogicAppStandardSiteConfigIpRestrictionList IpRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigIpRestrictionList">LogicAppStandardSiteConfigIpRestrictionList</a>

---

##### `ScmIpRestriction`<sup>Required</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestriction"></a>

```csharp
public LogicAppStandardSiteConfigScmIpRestrictionList ScmIpRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList">LogicAppStandardSiteConfigScmIpRestrictionList</a>

---

##### `AlwaysOnInput`<sup>Optional</sup> <a name="AlwaysOnInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOnInput"></a>

```csharp
public object AlwaysOnInput { get; }
```

- *Type:* object

---

##### `AppScaleLimitInput`<sup>Optional</sup> <a name="AppScaleLimitInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimitInput"></a>

```csharp
public double AppScaleLimitInput { get; }
```

- *Type:* double

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.corsInput"></a>

```csharp
public LogicAppStandardSiteConfigCors CorsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigCors">LogicAppStandardSiteConfigCors</a>

---

##### `DotnetFrameworkVersionInput`<sup>Optional</sup> <a name="DotnetFrameworkVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```csharp
public string DotnetFrameworkVersionInput { get; }
```

- *Type:* string

---

##### `ElasticInstanceMinimumInput`<sup>Optional</sup> <a name="ElasticInstanceMinimumInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```csharp
public double ElasticInstanceMinimumInput { get; }
```

- *Type:* double

---

##### `FtpsStateInput`<sup>Optional</sup> <a name="FtpsStateInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsStateInput"></a>

```csharp
public string FtpsStateInput { get; }
```

- *Type:* string

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPathInput"></a>

```csharp
public string HealthCheckPathInput { get; }
```

- *Type:* string

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2EnabledInput"></a>

```csharp
public object Http2EnabledInput { get; }
```

- *Type:* object

---

##### `IpRestrictionInput`<sup>Optional</sup> <a name="IpRestrictionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ipRestrictionInput"></a>

```csharp
public object IpRestrictionInput { get; }
```

- *Type:* object

---

##### `LinuxFxVersionInput`<sup>Optional</sup> <a name="LinuxFxVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```csharp
public string LinuxFxVersionInput { get; }
```

- *Type:* string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersionInput"></a>

```csharp
public string MinTlsVersionInput { get; }
```

- *Type:* string

---

##### `PreWarmedInstanceCountInput`<sup>Optional</sup> <a name="PreWarmedInstanceCountInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```csharp
public double PreWarmedInstanceCountInput { get; }
```

- *Type:* double

---

##### `RuntimeScaleMonitoringEnabledInput`<sup>Optional</sup> <a name="RuntimeScaleMonitoringEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```csharp
public object RuntimeScaleMonitoringEnabledInput { get; }
```

- *Type:* object

---

##### `ScmIpRestrictionInput`<sup>Optional</sup> <a name="ScmIpRestrictionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```csharp
public object ScmIpRestrictionInput { get; }
```

- *Type:* object

---

##### `ScmMinTlsVersionInput`<sup>Optional</sup> <a name="ScmMinTlsVersionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersionInput"></a>

```csharp
public string ScmMinTlsVersionInput { get; }
```

- *Type:* string

---

##### `ScmTypeInput`<sup>Optional</sup> <a name="ScmTypeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmTypeInput"></a>

```csharp
public string ScmTypeInput { get; }
```

- *Type:* string

---

##### `ScmUseMainIpRestrictionInput`<sup>Optional</sup> <a name="ScmUseMainIpRestrictionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```csharp
public object ScmUseMainIpRestrictionInput { get; }
```

- *Type:* object

---

##### `Use32BitWorkerProcessInput`<sup>Optional</sup> <a name="Use32BitWorkerProcessInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```csharp
public object Use32BitWorkerProcessInput { get; }
```

- *Type:* object

---

##### `VnetRouteAllEnabledInput`<sup>Optional</sup> <a name="VnetRouteAllEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```csharp
public object VnetRouteAllEnabledInput { get; }
```

- *Type:* object

---

##### `WebsocketsEnabledInput`<sup>Optional</sup> <a name="WebsocketsEnabledInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```csharp
public object WebsocketsEnabledInput { get; }
```

- *Type:* object

---

##### `AlwaysOn`<sup>Required</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.alwaysOn"></a>

```csharp
public object AlwaysOn { get; }
```

- *Type:* object

---

##### `AppScaleLimit`<sup>Required</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.appScaleLimit"></a>

```csharp
public double AppScaleLimit { get; }
```

- *Type:* double

---

##### `DotnetFrameworkVersion`<sup>Required</sup> <a name="DotnetFrameworkVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```csharp
public string DotnetFrameworkVersion { get; }
```

- *Type:* string

---

##### `ElasticInstanceMinimum`<sup>Required</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```csharp
public double ElasticInstanceMinimum { get; }
```

- *Type:* double

---

##### `FtpsState`<sup>Required</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.ftpsState"></a>

```csharp
public string FtpsState { get; }
```

- *Type:* string

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; }
```

- *Type:* string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.http2Enabled"></a>

```csharp
public object Http2Enabled { get; }
```

- *Type:* object

---

##### `LinuxFxVersion`<sup>Required</sup> <a name="LinuxFxVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.linuxFxVersion"></a>

```csharp
public string LinuxFxVersion { get; }
```

- *Type:* string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; }
```

- *Type:* string

---

##### `PreWarmedInstanceCount`<sup>Required</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```csharp
public double PreWarmedInstanceCount { get; }
```

- *Type:* double

---

##### `RuntimeScaleMonitoringEnabled`<sup>Required</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```csharp
public object RuntimeScaleMonitoringEnabled { get; }
```

- *Type:* object

---

##### `ScmMinTlsVersion`<sup>Required</sup> <a name="ScmMinTlsVersion" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion"></a>

```csharp
public string ScmMinTlsVersion { get; }
```

- *Type:* string

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmType"></a>

```csharp
public string ScmType { get; }
```

- *Type:* string

---

##### `ScmUseMainIpRestriction`<sup>Required</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```csharp
public object ScmUseMainIpRestriction { get; }
```

- *Type:* object

---

##### `Use32BitWorkerProcess`<sup>Required</sup> <a name="Use32BitWorkerProcess" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```csharp
public object Use32BitWorkerProcess { get; }
```

- *Type:* object

---

##### `VnetRouteAllEnabled`<sup>Required</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```csharp
public object VnetRouteAllEnabled { get; }
```

- *Type:* object

---

##### `WebsocketsEnabled`<sup>Required</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.websocketsEnabled"></a>

```csharp
public object WebsocketsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigOutputReference.property.internalValue"></a>

```csharp
public LogicAppStandardSiteConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfig">LogicAppStandardSiteConfig</a>

---


### LogicAppStandardSiteConfigScmIpRestrictionHeadersList <a name="LogicAppStandardSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigScmIpRestrictionHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get"></a>

```csharp
private LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference <a name="LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">ResetXAzureFdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">ResetXFdHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">ResetXForwardedFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">ResetXForwardedHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetXAzureFdid` <a name="ResetXAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```csharp
private void ResetXAzureFdid()
```

##### `ResetXFdHealthProbe` <a name="ResetXFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```csharp
private void ResetXFdHealthProbe()
```

##### `ResetXForwardedFor` <a name="ResetXForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```csharp
private void ResetXForwardedFor()
```

##### `ResetXForwardedHost` <a name="ResetXForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```csharp
private void ResetXForwardedHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">XAzureFdidInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">XFdHealthProbeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">XForwardedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">XForwardedHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XAzureFdidInput`<sup>Optional</sup> <a name="XAzureFdidInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```csharp
public string[] XAzureFdidInput { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbeInput`<sup>Optional</sup> <a name="XFdHealthProbeInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```csharp
public string[] XFdHealthProbeInput { get; }
```

- *Type:* string[]

---

##### `XForwardedForInput`<sup>Optional</sup> <a name="XForwardedForInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```csharp
public string[] XForwardedForInput { get; }
```

- *Type:* string[]

---

##### `XForwardedHostInput`<sup>Optional</sup> <a name="XForwardedHostInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```csharp
public string[] XForwardedHostInput { get; }
```

- *Type:* string[]

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```csharp
public string[] XAzureFdid { get; }
```

- *Type:* string[]

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```csharp
public string[] XFdHealthProbe { get; }
```

- *Type:* string[]

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```csharp
public string[] XForwardedFor { get; }
```

- *Type:* string[]

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```csharp
public string[] XForwardedHost { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppStandardSiteConfigScmIpRestrictionList <a name="LogicAppStandardSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigScmIpRestrictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get"></a>

```csharp
private LogicAppStandardSiteConfigScmIpRestrictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppStandardSiteConfigScmIpRestrictionOutputReference <a name="LogicAppStandardSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteConfigScmIpRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetServiceTag">ResetServiceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">ResetVirtualNetworkSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetServiceTag` <a name="ResetServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```csharp
private void ResetServiceTag()
```

##### `ResetVirtualNetworkSubnetId` <a name="ResetVirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```csharp
private void ResetVirtualNetworkSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList">LogicAppStandardSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">ServiceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">VirtualNetworkSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```csharp
public LogicAppStandardSiteConfigScmIpRestrictionHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionHeadersList">LogicAppStandardSiteConfigScmIpRestrictionHeadersList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ServiceTagInput`<sup>Optional</sup> <a name="ServiceTagInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```csharp
public string ServiceTagInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetIdInput`<sup>Optional</sup> <a name="VirtualNetworkSubnetIdInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```csharp
public string VirtualNetworkSubnetIdInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```csharp
public string ServiceTag { get; }
```

- *Type:* string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```csharp
public string VirtualNetworkSubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppStandardSiteCredentialList <a name="LogicAppStandardSiteCredentialList" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get"></a>

```csharp
private LogicAppStandardSiteCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### LogicAppStandardSiteCredentialOutputReference <a name="LogicAppStandardSiteCredentialOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardSiteCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential">LogicAppStandardSiteCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredentialOutputReference.property.internalValue"></a>

```csharp
public LogicAppStandardSiteCredential InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardSiteCredential">LogicAppStandardSiteCredential</a>

---


### LogicAppStandardTimeoutsOutputReference <a name="LogicAppStandardTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppStandardTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppStandard.LogicAppStandardTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



