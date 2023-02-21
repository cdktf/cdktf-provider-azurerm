# `logAnalyticsWorkspace` Submodule <a name="`logAnalyticsWorkspace` Submodule" id="@cdktf/provider-azurerm.logAnalyticsWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsWorkspace <a name="LogAnalyticsWorkspace" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace azurerm_log_analytics_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsWorkspace(Construct Scope, string Id, LogAnalyticsWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig">LogAnalyticsWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig">LogAnalyticsWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetAllowResourceOnlyPermissions">ResetAllowResourceOnlyPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetCmkForQueryForced">ResetCmkForQueryForced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetDailyQuotaGb">ResetDailyQuotaGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetIngestionEnabled">ResetInternetIngestionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetQueryEnabled">ResetInternetQueryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetLocalAuthenticationDisabled">ResetLocalAuthenticationDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetReservationCapacityInGbPerDay">ResetReservationCapacityInGbPerDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts"></a>

```csharp
private void PutTimeouts(LogAnalyticsWorkspaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a>

---

##### `ResetAllowResourceOnlyPermissions` <a name="ResetAllowResourceOnlyPermissions" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetAllowResourceOnlyPermissions"></a>

```csharp
private void ResetAllowResourceOnlyPermissions()
```

##### `ResetCmkForQueryForced` <a name="ResetCmkForQueryForced" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetCmkForQueryForced"></a>

```csharp
private void ResetCmkForQueryForced()
```

##### `ResetDailyQuotaGb` <a name="ResetDailyQuotaGb" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetDailyQuotaGb"></a>

```csharp
private void ResetDailyQuotaGb()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInternetIngestionEnabled` <a name="ResetInternetIngestionEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetIngestionEnabled"></a>

```csharp
private void ResetInternetIngestionEnabled()
```

##### `ResetInternetQueryEnabled` <a name="ResetInternetQueryEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetInternetQueryEnabled"></a>

```csharp
private void ResetInternetQueryEnabled()
```

##### `ResetLocalAuthenticationDisabled` <a name="ResetLocalAuthenticationDisabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetLocalAuthenticationDisabled"></a>

```csharp
private void ResetLocalAuthenticationDisabled()
```

##### `ResetReservationCapacityInGbPerDay` <a name="ResetReservationCapacityInGbPerDay" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetReservationCapacityInGbPerDay"></a>

```csharp
private void ResetReservationCapacityInGbPerDay()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetRetentionInDays"></a>

```csharp
private void ResetRetentionInDays()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetSku"></a>

```csharp
private void ResetSku()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogAnalyticsWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogAnalyticsWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogAnalyticsWorkspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.primarySharedKey">PrimarySharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.secondarySharedKey">SecondarySharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference">LogAnalyticsWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissionsInput">AllowResourceOnlyPermissionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForcedInput">CmkForQueryForcedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGbInput">DailyQuotaGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabledInput">InternetIngestionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabledInput">InternetQueryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabledInput">LocalAuthenticationDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDayInput">ReservationCapacityInGbPerDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissions">AllowResourceOnlyPermissions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForced">CmkForQueryForced</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGb">DailyQuotaGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabled">InternetIngestionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabled">InternetQueryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabled">LocalAuthenticationDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDay">ReservationCapacityInGbPerDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PrimarySharedKey`<sup>Required</sup> <a name="PrimarySharedKey" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.primarySharedKey"></a>

```csharp
public string PrimarySharedKey { get; }
```

- *Type:* string

---

##### `SecondarySharedKey`<sup>Required</sup> <a name="SecondarySharedKey" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.secondarySharedKey"></a>

```csharp
public string SecondarySharedKey { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeouts"></a>

```csharp
public LogAnalyticsWorkspaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference">LogAnalyticsWorkspaceTimeoutsOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `AllowResourceOnlyPermissionsInput`<sup>Optional</sup> <a name="AllowResourceOnlyPermissionsInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissionsInput"></a>

```csharp
public object AllowResourceOnlyPermissionsInput { get; }
```

- *Type:* object

---

##### `CmkForQueryForcedInput`<sup>Optional</sup> <a name="CmkForQueryForcedInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForcedInput"></a>

```csharp
public object CmkForQueryForcedInput { get; }
```

- *Type:* object

---

##### `DailyQuotaGbInput`<sup>Optional</sup> <a name="DailyQuotaGbInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGbInput"></a>

```csharp
public double DailyQuotaGbInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternetIngestionEnabledInput`<sup>Optional</sup> <a name="InternetIngestionEnabledInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabledInput"></a>

```csharp
public object InternetIngestionEnabledInput { get; }
```

- *Type:* object

---

##### `InternetQueryEnabledInput`<sup>Optional</sup> <a name="InternetQueryEnabledInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabledInput"></a>

```csharp
public object InternetQueryEnabledInput { get; }
```

- *Type:* object

---

##### `LocalAuthenticationDisabledInput`<sup>Optional</sup> <a name="LocalAuthenticationDisabledInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabledInput"></a>

```csharp
public object LocalAuthenticationDisabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReservationCapacityInGbPerDayInput`<sup>Optional</sup> <a name="ReservationCapacityInGbPerDayInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDayInput"></a>

```csharp
public double ReservationCapacityInGbPerDayInput { get; }
```

- *Type:* double

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDaysInput"></a>

```csharp
public double RetentionInDaysInput { get; }
```

- *Type:* double

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowResourceOnlyPermissions`<sup>Required</sup> <a name="AllowResourceOnlyPermissions" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.allowResourceOnlyPermissions"></a>

```csharp
public object AllowResourceOnlyPermissions { get; }
```

- *Type:* object

---

##### `CmkForQueryForced`<sup>Required</sup> <a name="CmkForQueryForced" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.cmkForQueryForced"></a>

```csharp
public object CmkForQueryForced { get; }
```

- *Type:* object

---

##### `DailyQuotaGb`<sup>Required</sup> <a name="DailyQuotaGb" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.dailyQuotaGb"></a>

```csharp
public double DailyQuotaGb { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternetIngestionEnabled`<sup>Required</sup> <a name="InternetIngestionEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetIngestionEnabled"></a>

```csharp
public object InternetIngestionEnabled { get; }
```

- *Type:* object

---

##### `InternetQueryEnabled`<sup>Required</sup> <a name="InternetQueryEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.internetQueryEnabled"></a>

```csharp
public object InternetQueryEnabled { get; }
```

- *Type:* object

---

##### `LocalAuthenticationDisabled`<sup>Required</sup> <a name="LocalAuthenticationDisabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.localAuthenticationDisabled"></a>

```csharp
public object LocalAuthenticationDisabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReservationCapacityInGbPerDay`<sup>Required</sup> <a name="ReservationCapacityInGbPerDay" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.reservationCapacityInGbPerDay"></a>

```csharp
public double ReservationCapacityInGbPerDay { get; }
```

- *Type:* double

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsWorkspaceConfig <a name="LogAnalyticsWorkspaceConfig" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsWorkspaceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    object AllowResourceOnlyPermissions = null,
    object CmkForQueryForced = null,
    double DailyQuotaGb = null,
    string Id = null,
    object InternetIngestionEnabled = null,
    object InternetQueryEnabled = null,
    object LocalAuthenticationDisabled = null,
    double ReservationCapacityInGbPerDay = null,
    double RetentionInDays = null,
    string Sku = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    LogAnalyticsWorkspaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#location LogAnalyticsWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#name LogAnalyticsWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#resource_group_name LogAnalyticsWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.allowResourceOnlyPermissions">AllowResourceOnlyPermissions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#allow_resource_only_permissions LogAnalyticsWorkspace#allow_resource_only_permissions}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.cmkForQueryForced">CmkForQueryForced</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#cmk_for_query_forced LogAnalyticsWorkspace#cmk_for_query_forced}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dailyQuotaGb">DailyQuotaGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#daily_quota_gb LogAnalyticsWorkspace#daily_quota_gb}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#id LogAnalyticsWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetIngestionEnabled">InternetIngestionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#internet_ingestion_enabled LogAnalyticsWorkspace#internet_ingestion_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetQueryEnabled">InternetQueryEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#internet_query_enabled LogAnalyticsWorkspace#internet_query_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.localAuthenticationDisabled">LocalAuthenticationDisabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#local_authentication_disabled LogAnalyticsWorkspace#local_authentication_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.reservationCapacityInGbPerDay">ReservationCapacityInGbPerDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#reservation_capacity_in_gb_per_day LogAnalyticsWorkspace#reservation_capacity_in_gb_per_day}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#retention_in_days LogAnalyticsWorkspace#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#sku LogAnalyticsWorkspace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#tags LogAnalyticsWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#location LogAnalyticsWorkspace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#name LogAnalyticsWorkspace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#resource_group_name LogAnalyticsWorkspace#resource_group_name}.

---

##### `AllowResourceOnlyPermissions`<sup>Optional</sup> <a name="AllowResourceOnlyPermissions" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.allowResourceOnlyPermissions"></a>

```csharp
public object AllowResourceOnlyPermissions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#allow_resource_only_permissions LogAnalyticsWorkspace#allow_resource_only_permissions}.

---

##### `CmkForQueryForced`<sup>Optional</sup> <a name="CmkForQueryForced" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.cmkForQueryForced"></a>

```csharp
public object CmkForQueryForced { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#cmk_for_query_forced LogAnalyticsWorkspace#cmk_for_query_forced}.

---

##### `DailyQuotaGb`<sup>Optional</sup> <a name="DailyQuotaGb" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.dailyQuotaGb"></a>

```csharp
public double DailyQuotaGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#daily_quota_gb LogAnalyticsWorkspace#daily_quota_gb}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#id LogAnalyticsWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternetIngestionEnabled`<sup>Optional</sup> <a name="InternetIngestionEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetIngestionEnabled"></a>

```csharp
public object InternetIngestionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#internet_ingestion_enabled LogAnalyticsWorkspace#internet_ingestion_enabled}.

---

##### `InternetQueryEnabled`<sup>Optional</sup> <a name="InternetQueryEnabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.internetQueryEnabled"></a>

```csharp
public object InternetQueryEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#internet_query_enabled LogAnalyticsWorkspace#internet_query_enabled}.

---

##### `LocalAuthenticationDisabled`<sup>Optional</sup> <a name="LocalAuthenticationDisabled" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.localAuthenticationDisabled"></a>

```csharp
public object LocalAuthenticationDisabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#local_authentication_disabled LogAnalyticsWorkspace#local_authentication_disabled}.

---

##### `ReservationCapacityInGbPerDay`<sup>Optional</sup> <a name="ReservationCapacityInGbPerDay" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.reservationCapacityInGbPerDay"></a>

```csharp
public double ReservationCapacityInGbPerDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#reservation_capacity_in_gb_per_day LogAnalyticsWorkspace#reservation_capacity_in_gb_per_day}.

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#retention_in_days LogAnalyticsWorkspace#retention_in_days}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#sku LogAnalyticsWorkspace#sku}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#tags LogAnalyticsWorkspace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceConfig.property.timeouts"></a>

```csharp
public LogAnalyticsWorkspaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts">LogAnalyticsWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#timeouts LogAnalyticsWorkspace#timeouts}

---

### LogAnalyticsWorkspaceTimeouts <a name="LogAnalyticsWorkspaceTimeouts" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsWorkspaceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#create LogAnalyticsWorkspace#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#delete LogAnalyticsWorkspace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#read LogAnalyticsWorkspace#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#update LogAnalyticsWorkspace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#create LogAnalyticsWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#delete LogAnalyticsWorkspace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#read LogAnalyticsWorkspace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/log_analytics_workspace#update LogAnalyticsWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsWorkspaceTimeoutsOutputReference <a name="LogAnalyticsWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsWorkspaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logAnalyticsWorkspace.LogAnalyticsWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



