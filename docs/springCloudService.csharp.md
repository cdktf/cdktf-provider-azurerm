# `springCloudService` Submodule <a name="`springCloudService` Submodule" id="@cdktf/provider-azurerm.springCloudService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudService <a name="SpringCloudService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service azurerm_spring_cloud_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudService(Construct Scope, string Id, SpringCloudServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig">SpringCloudServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig">SpringCloudServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putConfigServerGitSetting">PutConfigServerGitSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putContainerRegistry">PutContainerRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putDefaultBuildService">PutDefaultBuildService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putMarketplace">PutMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTrace">PutTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetBuildAgentPoolSize">ResetBuildAgentPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetConfigServerGitSetting">ResetConfigServerGitSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetContainerRegistry">ResetContainerRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetDefaultBuildService">ResetDefaultBuildService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetLogStreamPublicEndpointEnabled">ResetLogStreamPublicEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetManagedEnvironmentId">ResetManagedEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetMarketplace">ResetMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetServiceRegistryEnabled">ResetServiceRegistryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetSkuTier">ResetSkuTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTrace">ResetTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetZoneRedundant">ResetZoneRedundant</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigServerGitSetting` <a name="PutConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putConfigServerGitSetting"></a>

```csharp
private void PutConfigServerGitSetting(SpringCloudServiceConfigServerGitSetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putConfigServerGitSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

---

##### `PutContainerRegistry` <a name="PutContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putContainerRegistry"></a>

```csharp
private void PutContainerRegistry(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putContainerRegistry.parameter.value"></a>

- *Type:* object

---

##### `PutDefaultBuildService` <a name="PutDefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putDefaultBuildService"></a>

```csharp
private void PutDefaultBuildService(SpringCloudServiceDefaultBuildService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putDefaultBuildService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

---

##### `PutMarketplace` <a name="PutMarketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putMarketplace"></a>

```csharp
private void PutMarketplace(SpringCloudServiceMarketplace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putMarketplace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putNetwork"></a>

```csharp
private void PutNetwork(SpringCloudServiceNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a>

---

##### `PutTrace` <a name="PutTrace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTrace"></a>

```csharp
private void PutTrace(SpringCloudServiceTrace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.putTrace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

---

##### `ResetBuildAgentPoolSize` <a name="ResetBuildAgentPoolSize" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetBuildAgentPoolSize"></a>

```csharp
private void ResetBuildAgentPoolSize()
```

##### `ResetConfigServerGitSetting` <a name="ResetConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetConfigServerGitSetting"></a>

```csharp
private void ResetConfigServerGitSetting()
```

##### `ResetContainerRegistry` <a name="ResetContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetContainerRegistry"></a>

```csharp
private void ResetContainerRegistry()
```

##### `ResetDefaultBuildService` <a name="ResetDefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetDefaultBuildService"></a>

```csharp
private void ResetDefaultBuildService()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogStreamPublicEndpointEnabled` <a name="ResetLogStreamPublicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetLogStreamPublicEndpointEnabled"></a>

```csharp
private void ResetLogStreamPublicEndpointEnabled()
```

##### `ResetManagedEnvironmentId` <a name="ResetManagedEnvironmentId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetManagedEnvironmentId"></a>

```csharp
private void ResetManagedEnvironmentId()
```

##### `ResetMarketplace` <a name="ResetMarketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetMarketplace"></a>

```csharp
private void ResetMarketplace()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetServiceRegistryEnabled` <a name="ResetServiceRegistryEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetServiceRegistryEnabled"></a>

```csharp
private void ResetServiceRegistryEnabled()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetSkuName"></a>

```csharp
private void ResetSkuName()
```

##### `ResetSkuTier` <a name="ResetSkuTier" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetSkuTier"></a>

```csharp
private void ResetSkuTier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrace` <a name="ResetTrace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetTrace"></a>

```csharp
private void ResetTrace()
```

##### `ResetZoneRedundant` <a name="ResetZoneRedundant" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.resetZoneRedundant"></a>

```csharp
private void ResetZoneRedundant()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpringCloudService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSetting">ConfigServerGitSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference">SpringCloudServiceConfigServerGitSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistry">ContainerRegistry</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList">SpringCloudServiceContainerRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildService">DefaultBuildService</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference">SpringCloudServiceDefaultBuildServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplace">Marketplace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference">SpringCloudServiceMarketplaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference">SpringCloudServiceNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.outboundPublicIpAddresses">OutboundPublicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.requiredNetworkTrafficRules">RequiredNetworkTrafficRules</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList">SpringCloudServiceRequiredNetworkTrafficRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryId">ServiceRegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference">SpringCloudServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.trace">Trace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference">SpringCloudServiceTraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSizeInput">BuildAgentPoolSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSettingInput">ConfigServerGitSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistryInput">ContainerRegistryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildServiceInput">DefaultBuildServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabledInput">LogStreamPublicEndpointEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.managedEnvironmentIdInput">ManagedEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplaceInput">MarketplaceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabledInput">ServiceRegistryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuTierInput">SkuTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.traceInput">TraceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundantInput">ZoneRedundantInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSize">BuildAgentPoolSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabled">LogStreamPublicEndpointEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.managedEnvironmentId">ManagedEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabled">ServiceRegistryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuTier">SkuTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundant">ZoneRedundant</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConfigServerGitSetting`<sup>Required</sup> <a name="ConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSetting"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingOutputReference ConfigServerGitSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference">SpringCloudServiceConfigServerGitSettingOutputReference</a>

---

##### `ContainerRegistry`<sup>Required</sup> <a name="ContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistry"></a>

```csharp
public SpringCloudServiceContainerRegistryList ContainerRegistry { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList">SpringCloudServiceContainerRegistryList</a>

---

##### `DefaultBuildService`<sup>Required</sup> <a name="DefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildService"></a>

```csharp
public SpringCloudServiceDefaultBuildServiceOutputReference DefaultBuildService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference">SpringCloudServiceDefaultBuildServiceOutputReference</a>

---

##### `Marketplace`<sup>Required</sup> <a name="Marketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplace"></a>

```csharp
public SpringCloudServiceMarketplaceOutputReference Marketplace { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference">SpringCloudServiceMarketplaceOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.network"></a>

```csharp
public SpringCloudServiceNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference">SpringCloudServiceNetworkOutputReference</a>

---

##### `OutboundPublicIpAddresses`<sup>Required</sup> <a name="OutboundPublicIpAddresses" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.outboundPublicIpAddresses"></a>

```csharp
public string[] OutboundPublicIpAddresses { get; }
```

- *Type:* string[]

---

##### `RequiredNetworkTrafficRules`<sup>Required</sup> <a name="RequiredNetworkTrafficRules" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.requiredNetworkTrafficRules"></a>

```csharp
public SpringCloudServiceRequiredNetworkTrafficRulesList RequiredNetworkTrafficRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList">SpringCloudServiceRequiredNetworkTrafficRulesList</a>

---

##### `ServiceRegistryId`<sup>Required</sup> <a name="ServiceRegistryId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryId"></a>

```csharp
public string ServiceRegistryId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeouts"></a>

```csharp
public SpringCloudServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference">SpringCloudServiceTimeoutsOutputReference</a>

---

##### `Trace`<sup>Required</sup> <a name="Trace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.trace"></a>

```csharp
public SpringCloudServiceTraceOutputReference Trace { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference">SpringCloudServiceTraceOutputReference</a>

---

##### `BuildAgentPoolSizeInput`<sup>Optional</sup> <a name="BuildAgentPoolSizeInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSizeInput"></a>

```csharp
public string BuildAgentPoolSizeInput { get; }
```

- *Type:* string

---

##### `ConfigServerGitSettingInput`<sup>Optional</sup> <a name="ConfigServerGitSettingInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.configServerGitSettingInput"></a>

```csharp
public SpringCloudServiceConfigServerGitSetting ConfigServerGitSettingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

---

##### `ContainerRegistryInput`<sup>Optional</sup> <a name="ContainerRegistryInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.containerRegistryInput"></a>

```csharp
public object ContainerRegistryInput { get; }
```

- *Type:* object

---

##### `DefaultBuildServiceInput`<sup>Optional</sup> <a name="DefaultBuildServiceInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.defaultBuildServiceInput"></a>

```csharp
public SpringCloudServiceDefaultBuildService DefaultBuildServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LogStreamPublicEndpointEnabledInput`<sup>Optional</sup> <a name="LogStreamPublicEndpointEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabledInput"></a>

```csharp
public object LogStreamPublicEndpointEnabledInput { get; }
```

- *Type:* object

---

##### `ManagedEnvironmentIdInput`<sup>Optional</sup> <a name="ManagedEnvironmentIdInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.managedEnvironmentIdInput"></a>

```csharp
public string ManagedEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `MarketplaceInput`<sup>Optional</sup> <a name="MarketplaceInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.marketplaceInput"></a>

```csharp
public SpringCloudServiceMarketplace MarketplaceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.networkInput"></a>

```csharp
public SpringCloudServiceNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ServiceRegistryEnabledInput`<sup>Optional</sup> <a name="ServiceRegistryEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabledInput"></a>

```csharp
public object ServiceRegistryEnabledInput { get; }
```

- *Type:* object

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `SkuTierInput`<sup>Optional</sup> <a name="SkuTierInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuTierInput"></a>

```csharp
public string SkuTierInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TraceInput`<sup>Optional</sup> <a name="TraceInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.traceInput"></a>

```csharp
public SpringCloudServiceTrace TraceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

---

##### `ZoneRedundantInput`<sup>Optional</sup> <a name="ZoneRedundantInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundantInput"></a>

```csharp
public object ZoneRedundantInput { get; }
```

- *Type:* object

---

##### `BuildAgentPoolSize`<sup>Required</sup> <a name="BuildAgentPoolSize" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.buildAgentPoolSize"></a>

```csharp
public string BuildAgentPoolSize { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `LogStreamPublicEndpointEnabled`<sup>Required</sup> <a name="LogStreamPublicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.logStreamPublicEndpointEnabled"></a>

```csharp
public object LogStreamPublicEndpointEnabled { get; }
```

- *Type:* object

---

##### `ManagedEnvironmentId`<sup>Required</sup> <a name="ManagedEnvironmentId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.managedEnvironmentId"></a>

```csharp
public string ManagedEnvironmentId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServiceRegistryEnabled`<sup>Required</sup> <a name="ServiceRegistryEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.serviceRegistryEnabled"></a>

```csharp
public object ServiceRegistryEnabled { get; }
```

- *Type:* object

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `SkuTier`<sup>Required</sup> <a name="SkuTier" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.skuTier"></a>

```csharp
public string SkuTier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ZoneRedundant`<sup>Required</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.zoneRedundant"></a>

```csharp
public object ZoneRedundant { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudServiceConfig <a name="SpringCloudServiceConfig" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfig {
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
    string BuildAgentPoolSize = null,
    SpringCloudServiceConfigServerGitSetting ConfigServerGitSetting = null,
    object ContainerRegistry = null,
    SpringCloudServiceDefaultBuildService DefaultBuildService = null,
    string Id = null,
    object LogStreamPublicEndpointEnabled = null,
    string ManagedEnvironmentId = null,
    SpringCloudServiceMarketplace Marketplace = null,
    SpringCloudServiceNetwork Network = null,
    object ServiceRegistryEnabled = null,
    string SkuName = null,
    string SkuTier = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SpringCloudServiceTimeouts Timeouts = null,
    SpringCloudServiceTrace Trace = null,
    object ZoneRedundant = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#location SpringCloudService#location}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#name SpringCloudService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#resource_group_name SpringCloudService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.buildAgentPoolSize">BuildAgentPoolSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#build_agent_pool_size SpringCloudService#build_agent_pool_size}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.configServerGitSetting">ConfigServerGitSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a></code> | config_server_git_setting block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.containerRegistry">ContainerRegistry</a></code> | <code>object</code> | container_registry block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.defaultBuildService">DefaultBuildService</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a></code> | default_build_service block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#id SpringCloudService#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.logStreamPublicEndpointEnabled">LogStreamPublicEndpointEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#log_stream_public_endpoint_enabled SpringCloudService#log_stream_public_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.managedEnvironmentId">ManagedEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#managed_environment_id SpringCloudService#managed_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.marketplace">Marketplace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a></code> | marketplace block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.serviceRegistryEnabled">ServiceRegistryEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#service_registry_enabled SpringCloudService#service_registry_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#sku_name SpringCloudService#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.skuTier">SkuTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#sku_tier SpringCloudService#sku_tier}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#tags SpringCloudService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.trace">Trace</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a></code> | trace block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.zoneRedundant">ZoneRedundant</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#zone_redundant SpringCloudService#zone_redundant}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#location SpringCloudService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#name SpringCloudService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#resource_group_name SpringCloudService#resource_group_name}.

---

##### `BuildAgentPoolSize`<sup>Optional</sup> <a name="BuildAgentPoolSize" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.buildAgentPoolSize"></a>

```csharp
public string BuildAgentPoolSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#build_agent_pool_size SpringCloudService#build_agent_pool_size}.

---

##### `ConfigServerGitSetting`<sup>Optional</sup> <a name="ConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.configServerGitSetting"></a>

```csharp
public SpringCloudServiceConfigServerGitSetting ConfigServerGitSetting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

config_server_git_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#config_server_git_setting SpringCloudService#config_server_git_setting}

---

##### `ContainerRegistry`<sup>Optional</sup> <a name="ContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.containerRegistry"></a>

```csharp
public object ContainerRegistry { get; set; }
```

- *Type:* object

container_registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#container_registry SpringCloudService#container_registry}

---

##### `DefaultBuildService`<sup>Optional</sup> <a name="DefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.defaultBuildService"></a>

```csharp
public SpringCloudServiceDefaultBuildService DefaultBuildService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

default_build_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#default_build_service SpringCloudService#default_build_service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#id SpringCloudService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogStreamPublicEndpointEnabled`<sup>Optional</sup> <a name="LogStreamPublicEndpointEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.logStreamPublicEndpointEnabled"></a>

```csharp
public object LogStreamPublicEndpointEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#log_stream_public_endpoint_enabled SpringCloudService#log_stream_public_endpoint_enabled}.

---

##### `ManagedEnvironmentId`<sup>Optional</sup> <a name="ManagedEnvironmentId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.managedEnvironmentId"></a>

```csharp
public string ManagedEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#managed_environment_id SpringCloudService#managed_environment_id}.

---

##### `Marketplace`<sup>Optional</sup> <a name="Marketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.marketplace"></a>

```csharp
public SpringCloudServiceMarketplace Marketplace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#marketplace SpringCloudService#marketplace}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.network"></a>

```csharp
public SpringCloudServiceNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#network SpringCloudService#network}

---

##### `ServiceRegistryEnabled`<sup>Optional</sup> <a name="ServiceRegistryEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.serviceRegistryEnabled"></a>

```csharp
public object ServiceRegistryEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#service_registry_enabled SpringCloudService#service_registry_enabled}.

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#sku_name SpringCloudService#sku_name}.

---

##### `SkuTier`<sup>Optional</sup> <a name="SkuTier" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.skuTier"></a>

```csharp
public string SkuTier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#sku_tier SpringCloudService#sku_tier}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#tags SpringCloudService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.timeouts"></a>

```csharp
public SpringCloudServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts">SpringCloudServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#timeouts SpringCloudService#timeouts}

---

##### `Trace`<sup>Optional</sup> <a name="Trace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.trace"></a>

```csharp
public SpringCloudServiceTrace Trace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#trace SpringCloudService#trace}

---

##### `ZoneRedundant`<sup>Optional</sup> <a name="ZoneRedundant" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfig.property.zoneRedundant"></a>

```csharp
public object ZoneRedundant { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#zone_redundant SpringCloudService#zone_redundant}.

---

### SpringCloudServiceConfigServerGitSetting <a name="SpringCloudServiceConfigServerGitSetting" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSetting {
    string Uri,
    SpringCloudServiceConfigServerGitSettingHttpBasicAuth HttpBasicAuth = null,
    string Label = null,
    object Repository = null,
    string[] SearchPaths = null,
    SpringCloudServiceConfigServerGitSettingSshAuth SshAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.httpBasicAuth">HttpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a></code> | http_basic_auth block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#label SpringCloudService#label}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.repository">Repository</a></code> | <code>object</code> | repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.searchPaths">SearchPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.sshAuth">SshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a></code> | ssh_auth block. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}.

---

##### `HttpBasicAuth`<sup>Optional</sup> <a name="HttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.httpBasicAuth"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingHttpBasicAuth HttpBasicAuth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

http_basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#http_basic_auth SpringCloudService#http_basic_auth}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#label SpringCloudService#label}.

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.repository"></a>

```csharp
public object Repository { get; set; }
```

- *Type:* object

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#repository SpringCloudService#repository}

---

##### `SearchPaths`<sup>Optional</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.searchPaths"></a>

```csharp
public string[] SearchPaths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}.

---

##### `SshAuth`<sup>Optional</sup> <a name="SshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting.property.sshAuth"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingSshAuth SshAuth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

ssh_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#ssh_auth SpringCloudService#ssh_auth}

---

### SpringCloudServiceConfigServerGitSettingHttpBasicAuth <a name="SpringCloudServiceConfigServerGitSettingHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingHttpBasicAuth {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#password SpringCloudService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#username SpringCloudService#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#password SpringCloudService#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#username SpringCloudService#username}.

---

### SpringCloudServiceConfigServerGitSettingRepository <a name="SpringCloudServiceConfigServerGitSettingRepository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingRepository {
    string Name,
    string Uri,
    SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth HttpBasicAuth = null,
    string Label = null,
    string[] Pattern = null,
    string[] SearchPaths = null,
    SpringCloudServiceConfigServerGitSettingRepositorySshAuth SshAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#name SpringCloudService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.httpBasicAuth">HttpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a></code> | http_basic_auth block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#label SpringCloudService#label}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.pattern">Pattern</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#pattern SpringCloudService#pattern}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.searchPaths">SearchPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.sshAuth">SshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a></code> | ssh_auth block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#name SpringCloudService#name}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#uri SpringCloudService#uri}.

---

##### `HttpBasicAuth`<sup>Optional</sup> <a name="HttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.httpBasicAuth"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth HttpBasicAuth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

http_basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#http_basic_auth SpringCloudService#http_basic_auth}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#label SpringCloudService#label}.

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.pattern"></a>

```csharp
public string[] Pattern { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#pattern SpringCloudService#pattern}.

---

##### `SearchPaths`<sup>Optional</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.searchPaths"></a>

```csharp
public string[] SearchPaths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#search_paths SpringCloudService#search_paths}.

---

##### `SshAuth`<sup>Optional</sup> <a name="SshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepository.property.sshAuth"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingRepositorySshAuth SshAuth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

ssh_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#ssh_auth SpringCloudService#ssh_auth}

---

### SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth <a name="SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#password SpringCloudService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#username SpringCloudService#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#password SpringCloudService#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#username SpringCloudService#username}.

---

### SpringCloudServiceConfigServerGitSettingRepositorySshAuth <a name="SpringCloudServiceConfigServerGitSettingRepositorySshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingRepositorySshAuth {
    string PrivateKey,
    string HostKey = null,
    string HostKeyAlgorithm = null,
    object StrictHostKeyCheckingEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKey">HostKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.strictHostKeyCheckingEnabled">StrictHostKeyCheckingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}. |

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}.

---

##### `HostKey`<sup>Optional</sup> <a name="HostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKey"></a>

```csharp
public string HostKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}.

---

##### `HostKeyAlgorithm`<sup>Optional</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.hostKeyAlgorithm"></a>

```csharp
public string HostKeyAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}.

---

##### `StrictHostKeyCheckingEnabled`<sup>Optional</sup> <a name="StrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth.property.strictHostKeyCheckingEnabled"></a>

```csharp
public object StrictHostKeyCheckingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}.

---

### SpringCloudServiceConfigServerGitSettingSshAuth <a name="SpringCloudServiceConfigServerGitSettingSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingSshAuth {
    string PrivateKey,
    string HostKey = null,
    string HostKeyAlgorithm = null,
    object StrictHostKeyCheckingEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKey">HostKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.strictHostKeyCheckingEnabled">StrictHostKeyCheckingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}. |

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#private_key SpringCloudService#private_key}.

---

##### `HostKey`<sup>Optional</sup> <a name="HostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKey"></a>

```csharp
public string HostKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#host_key SpringCloudService#host_key}.

---

##### `HostKeyAlgorithm`<sup>Optional</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.hostKeyAlgorithm"></a>

```csharp
public string HostKeyAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#host_key_algorithm SpringCloudService#host_key_algorithm}.

---

##### `StrictHostKeyCheckingEnabled`<sup>Optional</sup> <a name="StrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth.property.strictHostKeyCheckingEnabled"></a>

```csharp
public object StrictHostKeyCheckingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#strict_host_key_checking_enabled SpringCloudService#strict_host_key_checking_enabled}.

---

### SpringCloudServiceContainerRegistry <a name="SpringCloudServiceContainerRegistry" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceContainerRegistry {
    string Name,
    string Password,
    string Server,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#name SpringCloudService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#password SpringCloudService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.server">Server</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#server SpringCloudService#server}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#username SpringCloudService#username}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#name SpringCloudService#name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#password SpringCloudService#password}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#server SpringCloudService#server}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistry.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#username SpringCloudService#username}.

---

### SpringCloudServiceDefaultBuildService <a name="SpringCloudServiceDefaultBuildService" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceDefaultBuildService {
    string ContainerRegistryName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService.property.containerRegistryName">ContainerRegistryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#container_registry_name SpringCloudService#container_registry_name}. |

---

##### `ContainerRegistryName`<sup>Optional</sup> <a name="ContainerRegistryName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService.property.containerRegistryName"></a>

```csharp
public string ContainerRegistryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#container_registry_name SpringCloudService#container_registry_name}.

---

### SpringCloudServiceMarketplace <a name="SpringCloudServiceMarketplace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceMarketplace {
    string Plan,
    string Product,
    string Publisher
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.plan">Plan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#plan SpringCloudService#plan}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.product">Product</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#product SpringCloudService#product}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#publisher SpringCloudService#publisher}. |

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.plan"></a>

```csharp
public string Plan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#plan SpringCloudService#plan}.

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.product"></a>

```csharp
public string Product { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#product SpringCloudService#product}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#publisher SpringCloudService#publisher}.

---

### SpringCloudServiceNetwork <a name="SpringCloudServiceNetwork" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceNetwork {
    string AppSubnetId,
    string[] CidrRanges,
    string ServiceRuntimeSubnetId,
    string AppNetworkResourceGroup = null,
    string OutboundType = null,
    double ReadTimeoutSeconds = null,
    string ServiceRuntimeNetworkResourceGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appSubnetId">AppSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#app_subnet_id SpringCloudService#app_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.cidrRanges">CidrRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#cidr_ranges SpringCloudService#cidr_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeSubnetId">ServiceRuntimeSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#service_runtime_subnet_id SpringCloudService#service_runtime_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appNetworkResourceGroup">AppNetworkResourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#app_network_resource_group SpringCloudService#app_network_resource_group}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.outboundType">OutboundType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#outbound_type SpringCloudService#outbound_type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.readTimeoutSeconds">ReadTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#read_timeout_seconds SpringCloudService#read_timeout_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeNetworkResourceGroup">ServiceRuntimeNetworkResourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#service_runtime_network_resource_group SpringCloudService#service_runtime_network_resource_group}. |

---

##### `AppSubnetId`<sup>Required</sup> <a name="AppSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appSubnetId"></a>

```csharp
public string AppSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#app_subnet_id SpringCloudService#app_subnet_id}.

---

##### `CidrRanges`<sup>Required</sup> <a name="CidrRanges" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.cidrRanges"></a>

```csharp
public string[] CidrRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#cidr_ranges SpringCloudService#cidr_ranges}.

---

##### `ServiceRuntimeSubnetId`<sup>Required</sup> <a name="ServiceRuntimeSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeSubnetId"></a>

```csharp
public string ServiceRuntimeSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#service_runtime_subnet_id SpringCloudService#service_runtime_subnet_id}.

---

##### `AppNetworkResourceGroup`<sup>Optional</sup> <a name="AppNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.appNetworkResourceGroup"></a>

```csharp
public string AppNetworkResourceGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#app_network_resource_group SpringCloudService#app_network_resource_group}.

---

##### `OutboundType`<sup>Optional</sup> <a name="OutboundType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.outboundType"></a>

```csharp
public string OutboundType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#outbound_type SpringCloudService#outbound_type}.

---

##### `ReadTimeoutSeconds`<sup>Optional</sup> <a name="ReadTimeoutSeconds" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.readTimeoutSeconds"></a>

```csharp
public double ReadTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#read_timeout_seconds SpringCloudService#read_timeout_seconds}.

---

##### `ServiceRuntimeNetworkResourceGroup`<sup>Optional</sup> <a name="ServiceRuntimeNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork.property.serviceRuntimeNetworkResourceGroup"></a>

```csharp
public string ServiceRuntimeNetworkResourceGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#service_runtime_network_resource_group SpringCloudService#service_runtime_network_resource_group}.

---

### SpringCloudServiceRequiredNetworkTrafficRules <a name="SpringCloudServiceRequiredNetworkTrafficRules" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceRequiredNetworkTrafficRules {

};
```


### SpringCloudServiceTimeouts <a name="SpringCloudServiceTimeouts" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#create SpringCloudService#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#delete SpringCloudService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#read SpringCloudService#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#update SpringCloudService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#create SpringCloudService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#delete SpringCloudService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#read SpringCloudService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#update SpringCloudService#update}.

---

### SpringCloudServiceTrace <a name="SpringCloudServiceTrace" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceTrace {
    string ConnectionString = null,
    double SampleRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#connection_string SpringCloudService#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.sampleRate">SampleRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#sample_rate SpringCloudService#sample_rate}. |

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#connection_string SpringCloudService#connection_string}.

---

##### `SampleRate`<sup>Optional</sup> <a name="SampleRate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace.property.sampleRate"></a>

```csharp
public double SampleRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/spring_cloud_service#sample_rate SpringCloudService#sample_rate}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.internalValue"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingHttpBasicAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

---


### SpringCloudServiceConfigServerGitSettingOutputReference <a name="SpringCloudServiceConfigServerGitSettingOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putHttpBasicAuth">PutHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putRepository">PutRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putSshAuth">PutSshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetHttpBasicAuth">ResetHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSearchPaths">ResetSearchPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSshAuth">ResetSshAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpBasicAuth` <a name="PutHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putHttpBasicAuth"></a>

```csharp
private void PutHttpBasicAuth(SpringCloudServiceConfigServerGitSettingHttpBasicAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putHttpBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

---

##### `PutRepository` <a name="PutRepository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putRepository"></a>

```csharp
private void PutRepository(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putRepository.parameter.value"></a>

- *Type:* object

---

##### `PutSshAuth` <a name="PutSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putSshAuth"></a>

```csharp
private void PutSshAuth(SpringCloudServiceConfigServerGitSettingSshAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.putSshAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

---

##### `ResetHttpBasicAuth` <a name="ResetHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetHttpBasicAuth"></a>

```csharp
private void ResetHttpBasicAuth()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```

##### `ResetSearchPaths` <a name="ResetSearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSearchPaths"></a>

```csharp
private void ResetSearchPaths()
```

##### `ResetSshAuth` <a name="ResetSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.resetSshAuth"></a>

```csharp
private void ResetSshAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuth">HttpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repository">Repository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList">SpringCloudServiceConfigServerGitSettingRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuth">SshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference">SpringCloudServiceConfigServerGitSettingSshAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuthInput">HttpBasicAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPathsInput">SearchPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuthInput">SshAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPaths">SearchPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpBasicAuth`<sup>Required</sup> <a name="HttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuth"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference HttpBasicAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference</a>

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repository"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingRepositoryList Repository { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList">SpringCloudServiceConfigServerGitSettingRepositoryList</a>

---

##### `SshAuth`<sup>Required</sup> <a name="SshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuth"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingSshAuthOutputReference SshAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference">SpringCloudServiceConfigServerGitSettingSshAuthOutputReference</a>

---

##### `HttpBasicAuthInput`<sup>Optional</sup> <a name="HttpBasicAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuthInput"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingHttpBasicAuth HttpBasicAuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingHttpBasicAuth">SpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.repositoryInput"></a>

```csharp
public object RepositoryInput { get; }
```

- *Type:* object

---

##### `SearchPathsInput`<sup>Optional</sup> <a name="SearchPathsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPathsInput"></a>

```csharp
public string[] SearchPathsInput { get; }
```

- *Type:* string[]

---

##### `SshAuthInput`<sup>Optional</sup> <a name="SshAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuthInput"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingSshAuth SshAuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `SearchPaths`<sup>Required</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.searchPaths"></a>

```csharp
public string[] SearchPaths { get; }
```

- *Type:* string[]

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingOutputReference.property.internalValue"></a>

```csharp
public SpringCloudServiceConfigServerGitSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSetting">SpringCloudServiceConfigServerGitSetting</a>

---


### SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.internalValue"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

---


### SpringCloudServiceConfigServerGitSettingRepositoryList <a name="SpringCloudServiceConfigServerGitSettingRepositoryList" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingRepositoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.get"></a>

```csharp
private SpringCloudServiceConfigServerGitSettingRepositoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpringCloudServiceConfigServerGitSettingRepositoryOutputReference <a name="SpringCloudServiceConfigServerGitSettingRepositoryOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putHttpBasicAuth">PutHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putSshAuth">PutSshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetHttpBasicAuth">ResetHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSearchPaths">ResetSearchPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSshAuth">ResetSshAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpBasicAuth` <a name="PutHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putHttpBasicAuth"></a>

```csharp
private void PutHttpBasicAuth(SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putHttpBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

---

##### `PutSshAuth` <a name="PutSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putSshAuth"></a>

```csharp
private void PutSshAuth(SpringCloudServiceConfigServerGitSettingRepositorySshAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.putSshAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

---

##### `ResetHttpBasicAuth` <a name="ResetHttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetHttpBasicAuth"></a>

```csharp
private void ResetHttpBasicAuth()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetSearchPaths` <a name="ResetSearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSearchPaths"></a>

```csharp
private void ResetSearchPaths()
```

##### `ResetSshAuth` <a name="ResetSshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resetSshAuth"></a>

```csharp
private void ResetSshAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuth">HttpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuth">SshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuthInput">HttpBasicAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.patternInput">PatternInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPathsInput">SearchPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuthInput">SshAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.pattern">Pattern</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPaths">SearchPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpBasicAuth`<sup>Required</sup> <a name="HttpBasicAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuth"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference HttpBasicAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference</a>

---

##### `SshAuth`<sup>Required</sup> <a name="SshAuth" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuth"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference SshAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference">SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference</a>

---

##### `HttpBasicAuthInput`<sup>Optional</sup> <a name="HttpBasicAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuthInput"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth HttpBasicAuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">SpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.patternInput"></a>

```csharp
public string[] PatternInput { get; }
```

- *Type:* string[]

---

##### `SearchPathsInput`<sup>Optional</sup> <a name="SearchPathsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPathsInput"></a>

```csharp
public string[] SearchPathsInput { get; }
```

- *Type:* string[]

---

##### `SshAuthInput`<sup>Optional</sup> <a name="SshAuthInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuthInput"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingRepositorySshAuth SshAuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.pattern"></a>

```csharp
public string[] Pattern { get; }
```

- *Type:* string[]

---

##### `SearchPaths`<sup>Required</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPaths"></a>

```csharp
public string[] SearchPaths { get; }
```

- *Type:* string[]

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKey">ResetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKeyAlgorithm">ResetHostKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetStrictHostKeyCheckingEnabled">ResetStrictHostKeyCheckingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostKey` <a name="ResetHostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKey"></a>

```csharp
private void ResetHostKey()
```

##### `ResetHostKeyAlgorithm` <a name="ResetHostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetHostKeyAlgorithm"></a>

```csharp
private void ResetHostKeyAlgorithm()
```

##### `ResetStrictHostKeyCheckingEnabled` <a name="ResetStrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resetStrictHostKeyCheckingEnabled"></a>

```csharp
private void ResetStrictHostKeyCheckingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput">HostKeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyInput">HostKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabledInput">StrictHostKeyCheckingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKey">HostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabled">StrictHostKeyCheckingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostKeyAlgorithmInput`<sup>Optional</sup> <a name="HostKeyAlgorithmInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithmInput"></a>

```csharp
public string HostKeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `HostKeyInput`<sup>Optional</sup> <a name="HostKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyInput"></a>

```csharp
public string HostKeyInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `StrictHostKeyCheckingEnabledInput`<sup>Optional</sup> <a name="StrictHostKeyCheckingEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabledInput"></a>

```csharp
public object StrictHostKeyCheckingEnabledInput { get; }
```

- *Type:* object

---

##### `HostKey`<sup>Required</sup> <a name="HostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKey"></a>

```csharp
public string HostKey { get; }
```

- *Type:* string

---

##### `HostKeyAlgorithm`<sup>Required</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithm"></a>

```csharp
public string HostKeyAlgorithm { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `StrictHostKeyCheckingEnabled`<sup>Required</sup> <a name="StrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabled"></a>

```csharp
public object StrictHostKeyCheckingEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.internalValue"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingRepositorySshAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingRepositorySshAuth">SpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

---


### SpringCloudServiceConfigServerGitSettingSshAuthOutputReference <a name="SpringCloudServiceConfigServerGitSettingSshAuthOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceConfigServerGitSettingSshAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKey">ResetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKeyAlgorithm">ResetHostKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetStrictHostKeyCheckingEnabled">ResetStrictHostKeyCheckingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostKey` <a name="ResetHostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKey"></a>

```csharp
private void ResetHostKey()
```

##### `ResetHostKeyAlgorithm` <a name="ResetHostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetHostKeyAlgorithm"></a>

```csharp
private void ResetHostKeyAlgorithm()
```

##### `ResetStrictHostKeyCheckingEnabled` <a name="ResetStrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resetStrictHostKeyCheckingEnabled"></a>

```csharp
private void ResetStrictHostKeyCheckingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithmInput">HostKeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyInput">HostKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabledInput">StrictHostKeyCheckingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKey">HostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabled">StrictHostKeyCheckingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostKeyAlgorithmInput`<sup>Optional</sup> <a name="HostKeyAlgorithmInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithmInput"></a>

```csharp
public string HostKeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `HostKeyInput`<sup>Optional</sup> <a name="HostKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyInput"></a>

```csharp
public string HostKeyInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `StrictHostKeyCheckingEnabledInput`<sup>Optional</sup> <a name="StrictHostKeyCheckingEnabledInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabledInput"></a>

```csharp
public object StrictHostKeyCheckingEnabledInput { get; }
```

- *Type:* object

---

##### `HostKey`<sup>Required</sup> <a name="HostKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKey"></a>

```csharp
public string HostKey { get; }
```

- *Type:* string

---

##### `HostKeyAlgorithm`<sup>Required</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithm"></a>

```csharp
public string HostKeyAlgorithm { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `StrictHostKeyCheckingEnabled`<sup>Required</sup> <a name="StrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabled"></a>

```csharp
public object StrictHostKeyCheckingEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.internalValue"></a>

```csharp
public SpringCloudServiceConfigServerGitSettingSshAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceConfigServerGitSettingSshAuth">SpringCloudServiceConfigServerGitSettingSshAuth</a>

---


### SpringCloudServiceContainerRegistryList <a name="SpringCloudServiceContainerRegistryList" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceContainerRegistryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.get"></a>

```csharp
private SpringCloudServiceContainerRegistryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpringCloudServiceContainerRegistryOutputReference <a name="SpringCloudServiceContainerRegistryOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceContainerRegistryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceContainerRegistryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpringCloudServiceDefaultBuildServiceOutputReference <a name="SpringCloudServiceDefaultBuildServiceOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceDefaultBuildServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resetContainerRegistryName">ResetContainerRegistryName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerRegistryName` <a name="ResetContainerRegistryName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.resetContainerRegistryName"></a>

```csharp
private void ResetContainerRegistryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryNameInput">ContainerRegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryName">ContainerRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerRegistryNameInput`<sup>Optional</sup> <a name="ContainerRegistryNameInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryNameInput"></a>

```csharp
public string ContainerRegistryNameInput { get; }
```

- *Type:* string

---

##### `ContainerRegistryName`<sup>Required</sup> <a name="ContainerRegistryName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.containerRegistryName"></a>

```csharp
public string ContainerRegistryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildServiceOutputReference.property.internalValue"></a>

```csharp
public SpringCloudServiceDefaultBuildService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceDefaultBuildService">SpringCloudServiceDefaultBuildService</a>

---


### SpringCloudServiceMarketplaceOutputReference <a name="SpringCloudServiceMarketplaceOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceMarketplaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.planInput">PlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.productInput">ProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.plan">Plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.planInput"></a>

```csharp
public string PlanInput { get; }
```

- *Type:* string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.productInput"></a>

```csharp
public string ProductInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.plan"></a>

```csharp
public string Plan { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplaceOutputReference.property.internalValue"></a>

```csharp
public SpringCloudServiceMarketplace InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceMarketplace">SpringCloudServiceMarketplace</a>

---


### SpringCloudServiceNetworkOutputReference <a name="SpringCloudServiceNetworkOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetAppNetworkResourceGroup">ResetAppNetworkResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetOutboundType">ResetOutboundType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetReadTimeoutSeconds">ResetReadTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetServiceRuntimeNetworkResourceGroup">ResetServiceRuntimeNetworkResourceGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppNetworkResourceGroup` <a name="ResetAppNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetAppNetworkResourceGroup"></a>

```csharp
private void ResetAppNetworkResourceGroup()
```

##### `ResetOutboundType` <a name="ResetOutboundType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetOutboundType"></a>

```csharp
private void ResetOutboundType()
```

##### `ResetReadTimeoutSeconds` <a name="ResetReadTimeoutSeconds" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetReadTimeoutSeconds"></a>

```csharp
private void ResetReadTimeoutSeconds()
```

##### `ResetServiceRuntimeNetworkResourceGroup` <a name="ResetServiceRuntimeNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.resetServiceRuntimeNetworkResourceGroup"></a>

```csharp
private void ResetServiceRuntimeNetworkResourceGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroupInput">AppNetworkResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetIdInput">AppSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRangesInput">CidrRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundTypeInput">OutboundTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSecondsInput">ReadTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroupInput">ServiceRuntimeNetworkResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetIdInput">ServiceRuntimeSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroup">AppNetworkResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetId">AppSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRanges">CidrRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundType">OutboundType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSeconds">ReadTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroup">ServiceRuntimeNetworkResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetId">ServiceRuntimeSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppNetworkResourceGroupInput`<sup>Optional</sup> <a name="AppNetworkResourceGroupInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroupInput"></a>

```csharp
public string AppNetworkResourceGroupInput { get; }
```

- *Type:* string

---

##### `AppSubnetIdInput`<sup>Optional</sup> <a name="AppSubnetIdInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetIdInput"></a>

```csharp
public string AppSubnetIdInput { get; }
```

- *Type:* string

---

##### `CidrRangesInput`<sup>Optional</sup> <a name="CidrRangesInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRangesInput"></a>

```csharp
public string[] CidrRangesInput { get; }
```

- *Type:* string[]

---

##### `OutboundTypeInput`<sup>Optional</sup> <a name="OutboundTypeInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundTypeInput"></a>

```csharp
public string OutboundTypeInput { get; }
```

- *Type:* string

---

##### `ReadTimeoutSecondsInput`<sup>Optional</sup> <a name="ReadTimeoutSecondsInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSecondsInput"></a>

```csharp
public double ReadTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `ServiceRuntimeNetworkResourceGroupInput`<sup>Optional</sup> <a name="ServiceRuntimeNetworkResourceGroupInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroupInput"></a>

```csharp
public string ServiceRuntimeNetworkResourceGroupInput { get; }
```

- *Type:* string

---

##### `ServiceRuntimeSubnetIdInput`<sup>Optional</sup> <a name="ServiceRuntimeSubnetIdInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetIdInput"></a>

```csharp
public string ServiceRuntimeSubnetIdInput { get; }
```

- *Type:* string

---

##### `AppNetworkResourceGroup`<sup>Required</sup> <a name="AppNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appNetworkResourceGroup"></a>

```csharp
public string AppNetworkResourceGroup { get; }
```

- *Type:* string

---

##### `AppSubnetId`<sup>Required</sup> <a name="AppSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.appSubnetId"></a>

```csharp
public string AppSubnetId { get; }
```

- *Type:* string

---

##### `CidrRanges`<sup>Required</sup> <a name="CidrRanges" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.cidrRanges"></a>

```csharp
public string[] CidrRanges { get; }
```

- *Type:* string[]

---

##### `OutboundType`<sup>Required</sup> <a name="OutboundType" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.outboundType"></a>

```csharp
public string OutboundType { get; }
```

- *Type:* string

---

##### `ReadTimeoutSeconds`<sup>Required</sup> <a name="ReadTimeoutSeconds" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.readTimeoutSeconds"></a>

```csharp
public double ReadTimeoutSeconds { get; }
```

- *Type:* double

---

##### `ServiceRuntimeNetworkResourceGroup`<sup>Required</sup> <a name="ServiceRuntimeNetworkResourceGroup" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeNetworkResourceGroup"></a>

```csharp
public string ServiceRuntimeNetworkResourceGroup { get; }
```

- *Type:* string

---

##### `ServiceRuntimeSubnetId`<sup>Required</sup> <a name="ServiceRuntimeSubnetId" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.serviceRuntimeSubnetId"></a>

```csharp
public string ServiceRuntimeSubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetworkOutputReference.property.internalValue"></a>

```csharp
public SpringCloudServiceNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceNetwork">SpringCloudServiceNetwork</a>

---


### SpringCloudServiceRequiredNetworkTrafficRulesList <a name="SpringCloudServiceRequiredNetworkTrafficRulesList" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceRequiredNetworkTrafficRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.get"></a>

```csharp
private SpringCloudServiceRequiredNetworkTrafficRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SpringCloudServiceRequiredNetworkTrafficRulesOutputReference <a name="SpringCloudServiceRequiredNetworkTrafficRulesOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceRequiredNetworkTrafficRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqdns">Fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules">SpringCloudServiceRequiredNetworkTrafficRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Fqdns`<sup>Required</sup> <a name="Fqdns" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqdns"></a>

```csharp
public string[] Fqdns { get; }
```

- *Type:* string[]

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.internalValue"></a>

```csharp
public SpringCloudServiceRequiredNetworkTrafficRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceRequiredNetworkTrafficRules">SpringCloudServiceRequiredNetworkTrafficRules</a>

---


### SpringCloudServiceTimeoutsOutputReference <a name="SpringCloudServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpringCloudServiceTraceOutputReference <a name="SpringCloudServiceTraceOutputReference" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudServiceTraceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetSampleRate">ResetSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetSampleRate` <a name="ResetSampleRate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.resetSampleRate"></a>

```csharp
private void ResetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRateInput">SampleRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRate">SampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `SampleRateInput`<sup>Optional</sup> <a name="SampleRateInput" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRateInput"></a>

```csharp
public double SampleRateInput { get; }
```

- *Type:* double

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `SampleRate`<sup>Required</sup> <a name="SampleRate" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.sampleRate"></a>

```csharp
public double SampleRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTraceOutputReference.property.internalValue"></a>

```csharp
public SpringCloudServiceTrace InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudService.SpringCloudServiceTrace">SpringCloudServiceTrace</a>

---



